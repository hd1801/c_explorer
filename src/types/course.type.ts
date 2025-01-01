import { ImageSourcePropType } from "react-native";
import { Category } from "../enums";
import { Unit } from "./unit.type";

export interface Course {
  id: number;
  title: string;
  AuthorId: number;
  price: number;
  description: string;
  lessons: Unit[];
  timeRequired: string;
  rating: number;
  categories: Category[];
  image: ImageSourcePropType;
  featured: boolean;
}

export type CoursesData = Course[];
