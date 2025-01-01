import { H1, Navbar, PageLayout } from "@/components";
import { CATEGORY_ICONS } from "@/constants";
import { Category } from "@/enums";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";

export default function CategoriesScreen() {
  return (
    <PageLayout>
      <Navbar 
        leftIcon={
          <Pressable onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
        }
        title="Categories"
      />
      <View className="px-8 py-6">
        <H1 className="text-3xl font-bold">Categories</H1>
      </View>
      <FlatList
        data={Object.values(Category)}
        numColumns={2}
        contentContainerStyle={{ gap: 16, padding: 16 }}
        columnWrapperStyle={{ gap: 16 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/category/${item}`)}
            className="flex-1 p-6 bg-card rounded-2xl items-center justify-center gap-4"
          >
            <MaterialCommunityIcons
              name={CATEGORY_ICONS[item] as any}
              size={32}
              color="black"
            />
            <H1 className="text-center text-sm font-medium">{item}</H1>
          </Pressable>
        )}
      />
    </PageLayout>
  );
} 