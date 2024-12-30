import { Category } from "../enums";
import { Unit } from "./unit.type";

export interface Course {
  id: number;
  title: string;
  price: number;
  description: string;
  lessons: Unit[];
  timeRequired: string;
  rating: number;
  categories: Category[];
  image: string;
}

export type CoursesData = Course[];
