import { createContext, ReactNode, useContext, useState } from "react";

import { CoursesData } from "@/types/course.type";

import Courses from "@/mocks/courses";

interface CourseContextType {
  courses: CoursesData;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

interface CourseProviderProps {
  children: ReactNode;
}

export function CourseProvider({ children }: CourseProviderProps) {
  const [courses, _] = useState<CoursesData>(Courses);

  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
}
