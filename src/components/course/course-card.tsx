import { Course } from "@/types";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";
import { useUser } from "~/src/providers";
import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  P,
} from "../ui";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const { isEnrolled } = useUser();
  const enrolled = isEnrolled(course.id);

  return (
    <Pressable onPress={() => router.push(`course/${course.id}`)}>
      <Card>
        <CardHeader>
          <Image source={course.image} className="w-full h-40 rounded-lg" />
        </CardHeader>
        <CardContent className="justify-between gap-2">
          <CardTitle>{course.title}</CardTitle>
          <View className="flex flex-row justify-between items-center">
            <P>{course.rating.toFixed(1)}</P>
            <P>{course.timeRequired}</P>
          </View>
        </CardContent>

        <CardFooter className="flex flex-col justify-start items-start gap-2">
          {enrolled && (
            <View>
              <Badge className="flex flex-row gap-2 bg-green-500">
                <Ionicons name="checkmark-circle" size={16} color="white" />
                <P className="text-primary-foreground">Enrolled</P>
              </Badge>
            </View>
          )}
          <View className="flex flex-row gap-2 flex-wrap">
            {course.categories.map((category, index) => (
              <Badge key={index}>
                <P className="text-xs font-semibold text-white">{category}</P>
              </Badge>
            ))}
          </View>
        </CardFooter>
      </Card>
    </Pressable>
  );
};
