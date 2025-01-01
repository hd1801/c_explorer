import { FlatList, ListRenderItem, View } from "react-native";
import { CourseCard, H2, H3, P, PageLayout } from "@/components";
import { useCourses, useUser } from "@/providers";
import { Course } from "@/types";
import { useMemo } from "react";

export default function EnrolledScreen() {
  const { courses } = useCourses();
  const { enrolledCourses } = useUser();

  const enrolledCoursesList = useMemo(() => {
    return enrolledCourses
      .map((enrolled) => courses.find((c) => c.id === enrolled.courseId))
      .filter(Boolean);
  }, [enrolledCourses, courses]);

  const renderCourses: ListRenderItem<Course> = ({ item }) => {
    return <CourseCard course={item} />;
  };

  if (enrolledCoursesList.length === 0) {
    return (
      <PageLayout>
        <View className="flex-1 items-center justify-center">
          <H3 className="font-bold mb-2">No Enrolled Courses</H3>
          <P className="text-gray-500">
            Start exploring and enroll in courses!
          </P>
        </View>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <H2 className="font-bold mb-4">My Enrolled Courses</H2>
      <FlatList
        className="w-full h-full"
        keyExtractor={(item) => item.id.toString()}
        data={enrolledCoursesList}
        renderItem={renderCourses}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      />
    </PageLayout>
  );
}
