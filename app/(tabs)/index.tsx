import { CourseCard, H1, H3, H4, Navbar, P, PageLayout } from "@/components";
import React, { useMemo } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import _ from "lodash";
import { FlatList, View, Pressable, ScrollView } from "react-native";
import { Category } from "~/src/enums";
import { useCourses, useUser } from "~/src/providers";
import { CATEGORY_ICONS } from "~/src/constants";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const { courses } = useCourses();
  const { enrolledCourses, user } = useUser();
  const featuredCourses = useMemo(
    () => _.filter(courses, (course) => course.featured),
    [courses]
  );

  const recentEnrolledCourses = useMemo(() => {
    const sortedEnrolled = [...enrolledCourses].sort(
      (a, b) => b.enrolledAt.getTime() - a.enrolledAt.getTime()
    );
    return sortedEnrolled
      .slice(0, 2)
      .map((enrolled) => courses.find((c) => c.id === enrolled.courseId))
      .filter(Boolean);
  }, [enrolledCourses, courses]);

  const router = useRouter();
  return (
    <PageLayout className="px-0">
      <ScrollView className="flex-1">
        <Navbar />
        <View className="flex-1 gap-4">
          <View className=" px-8 gap-3">
            <P className="font-medium">Hello, {user?.name} </P>
            <View className="gap-2">
              <H1 className="text-4xl font-bold">Find Perfect Online</H1>
              <H1 className="text-4xl font-bold">Courses For You</H1>
            </View>
          </View>
          <View className="py-4 gap-4">
            <View className="flex-row px-8 justify-between items-center">
              <H3 className="font-bold">Categories</H3>
              <Pressable onPress={() => router.push("/categories")}>
                <P className="text-primary">See All</P>
              </Pressable>
            </View>
            <FlatList
              data={Object.values(Category)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 16 }}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => router.push(`/category/${item}`)}
                  className="flex-1 p-6 bg-card rounded-2xl items-center justify-center gap-4"
                >
                  <MaterialCommunityIcons
                    name={CATEGORY_ICONS[item] as any}
                    size={24}
                    color="black"
                  />
                  <H4>{item}</H4>
                </Pressable>
              )}
            />
          </View>
          <View className="px-4 gap-4">
            <H3 className="font-bold px-4">Featured Courses</H3>
            <FlatList
              data={featuredCourses}
              renderItem={({ item }) => <CourseCard course={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 16 }}
            />
          </View>
          {recentEnrolledCourses.length > 0 && (
            <View className="px-4 gap-4 mb-4">
              <H3 className="font-bold px-4">Recently Enrolled</H3>
              <FlatList
                data={recentEnrolledCourses}
                renderItem={({ item }) => item && <CourseCard course={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10, paddingHorizontal: 16 }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </PageLayout>
  );
}
