export interface User {
  id: number;
  name: string;
  email: string;
}

export interface EnrolledCourse {
  courseId: number;
  enrolledAt: Date;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  enrolledCourses: EnrolledCourse[];
  enrollInCourse: (courseId: number) => void;
  isEnrolled: (courseId: number) => boolean;
} 