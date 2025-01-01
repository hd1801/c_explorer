import { CourseCard, H1, Navbar, PageLayout } from "@/components";
import { Category } from "@/enums";
import { useLocalSearchParams, router } from "expo-router";
import React, { useMemo } from "react";
import { FlatList, View, Pressable } from "react-native";
import { useCourses } from "~/src/providers";
import { AntDesign } from "@expo/vector-icons";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: Category }>();
  const { courses } = useCourses();

  const filteredCourses = useMemo(
    () => courses.filter((course) => course.categories.includes(id)),
    [courses, id]
  );

  return (
    <PageLayout>
      <Navbar 
        leftIcon={
          <Pressable onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
        }
        title={id}
      />
      <FlatList
        data={filteredCourses}
        contentContainerStyle={{ gap: 16, padding: 16 }}
        renderItem={({ item }) => <CourseCard course={item} />}
      />
    </PageLayout>
  );
} 