import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, UserContextType, EnrolledCourse } from '@/types/user.type';
import { router } from 'expo-router';

const UserContext = createContext<UserContextType | undefined>(undefined);

const USER_STORAGE_KEY = 'user_data';
const ENROLLED_COURSES_KEY = 'enrolled_courses';

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem(USER_STORAGE_KEY);
      const coursesData = await AsyncStorage.getItem(ENROLLED_COURSES_KEY);
      
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        // If no user data exists, redirect to registration
        router.replace('/register');
      }

      if (coursesData) {
        setEnrolledCourses(JSON.parse(coursesData));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const saveUser = async (userData: User) => {
    try {
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      setUser(userData);
      router.replace('/');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  // Make saveUser available globally
  global.saveUser = saveUser;

  const enrollInCourse = async (courseId: number) => {
    const newEnrollment: EnrolledCourse = {
      courseId,
      enrolledAt: new Date(),
    };

    const updatedCourses = [...enrolledCourses, newEnrollment];
    setEnrolledCourses(updatedCourses);

    try {
      await AsyncStorage.setItem(ENROLLED_COURSES_KEY, JSON.stringify(updatedCourses));
    } catch (error) {
      console.error('Error saving enrolled courses:', error);
    }
  };

  const isEnrolled = (courseId: number) => {
    return enrolledCourses.some((course) => course.courseId === courseId);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        enrolledCourses,
        enrollInCourse,
        isEnrolled,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 