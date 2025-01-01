import { FlatList, ListRenderItem, View } from "react-native";

import { CourseCard, H1, H2, Navbar, PageLayout } from "@/components";
import { useCourses } from "@/providers";
import { Course } from "@/types";

export default function ExploreCoursesScreen() {
  const { courses } = useCourses();

  const renderCourses: ListRenderItem<Course> = ({ item }) => {
    return <CourseCard course={item} />;
  };

  return (
    <PageLayout>
      <H2 className="px-4">Explore</H2>
      <View className="flex-1 gap-4">
        <FlatList
          className="w-full h-full p-4"
          keyExtractor={(item) => item.id.toString()}
          data={courses}
          renderItem={renderCourses}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
        />
      </View>
    </PageLayout>
  );
}
