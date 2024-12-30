import { SafeAreaView } from "react-native-safe-area-context";
import _ from "lodash";
import { useCourses } from "@/providers";
import { Course } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components";
import { FlatList, ListRenderItem } from "react-native";

export default function HomeScreen() {
  const { courses } = useCourses();

  const renderCourses: ListRenderItem<Course> = ({ item }) => {
    return (
      <Card className="w-full bg-card p-4 rounded-lg" key={item.id}>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{item.description}</CardDescription>
        </CardContent>
      </Card>
    );
  };

  console.log(courses);
  return (
    <SafeAreaView className="flex-1 gap-4 p-4 bg-red-500" style={{ gap: 16 }}>
      <FlatList data={courses} renderItem={renderCourses} />
    </SafeAreaView>
  );
}
