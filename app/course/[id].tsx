import { H3, H4, Navbar, P, PageLayout } from "@/components";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { useCourses, useUser } from "~/src/providers";

type TabType = "details" | "units";

export default function CourseScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { courses } = useCourses();
  const { user, enrollInCourse, isEnrolled } = useUser();
  const [activeTab, setActiveTab] = useState<TabType>("details");

  const course = useMemo(
    () => courses.find((c) => c.id === Number(id)),
    [courses, id]
  );

  if (!course) return null;

  const handleEnroll = () => {
    if (!user) {
      // TODO: Navigate to login
      return;
    }
    enrollInCourse(course.id);
  };

  const renderTab = (tab: TabType, label: string) => (
    <Pressable
      onPress={() => setActiveTab(tab)}
      className={`flex-1 py-3 border-b-2 ${
        activeTab === tab ? "border-primary" : "border-gray-200"
      }`}
    >
      <P
        className={`text-center ${
          activeTab === tab ? "text-primary font-medium" : "text-gray-500"
        }`}
      >
        {label}
      </P>
    </Pressable>
  );

  const renderDetails = () => (
    <View className="p-6 gap-4">
      <View className="gap-2">
        <H3 className="font-bold">About Course</H3>
        <P className="text-gray-600">{course.description}</P>
      </View>
      <View className="flex gap-4">
        <View className="gap-1">
          <P className="text-gray-500">Duration</P>
          <P className="font-medium">{course.timeRequired}</P>
        </View>
        <View className="gap-1">
          <P className="text-gray-500">Rating</P>
          <View className="flex-row items-center gap-1">
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <P className="font-medium">{course.rating}</P>
          </View>
        </View>
        <View className="gap-1">
          <P className="text-gray-500">Price</P>
          <P className="font-medium">${course.price}</P>
        </View>
      </View>
    </View>
  );

  const renderUnits = () => (
    <View className="p-6">
      {course.lessons.map((unit, index) => (
        <View key={index} className="mb-6">
          <H4 className="font-medium mb-2">{unit.unitTitle}</H4>
          <View className="gap-2">
            {unit.lessons.map((lesson, lessonIndex) => (
              <View
                key={lessonIndex}
                className="flex-row items-center p-4 bg-card rounded-lg"
              >
                <View className="h-8 w-8 bg-primary/10 rounded-full items-center justify-center mr-3">
                  <P className="text-primary font-medium">{lessonIndex + 1}</P>
                </View>
                <P>{lesson.lessonTitle}</P>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <PageLayout className="px-0">
      <Navbar
        leftIcon={
          <Pressable onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
        }
        title={course.title}
      />
      <ScrollView>
        <View className="rounded-2xl p-4">
          <Image
            source={course.image}
            className="w-full h-48 object-cover rounded-2xl"
            resizeMode="cover"
          />
        </View>
        <View className="flex-row">
          {renderTab("details", "Course Details")}
          {renderTab("units", "Units & Chapters")}
        </View>
        {activeTab === "details" ? renderDetails() : renderUnits()}
      </ScrollView>
      <View className="p-4 border-t border-gray-200">
        <Pressable
          onPress={handleEnroll}
          disabled={isEnrolled(course.id)}
          className={`p-4 rounded-lg flex-row items-center justify-center ${
            isEnrolled(course.id) ? "bg-green-500" : "bg-primary"
          }`}
        >
          <View className="flex-row items-center gap-2">
            {isEnrolled(course.id) ? (
              <>
                <AntDesign name="checkcircle" size={20} color="white" />
                <P className="text-white font-medium">Enrolled</P>
              </>
            ) : (
              <P className="text-white font-medium">Enroll Now</P>
            )}
          </View>
        </Pressable>
      </View>
    </PageLayout>
  );
}
