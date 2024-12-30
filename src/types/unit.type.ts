import { Lesson } from "./lesson.type";

export interface Unit {
  unitTitle: string;
  lessons: Lesson[];
}
