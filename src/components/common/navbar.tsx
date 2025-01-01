import { View } from "react-native";
import { H3 } from "../ui";

interface NavbarProps {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Navbar = ({ title, leftIcon, rightIcon }: NavbarProps) => {
  return (
    <View className="flex-row justify-between items-center p-4">
      <View>{leftIcon}</View>
      <H3>{title}</H3>
      <View>{rightIcon}</View>
    </View>
  );
};
