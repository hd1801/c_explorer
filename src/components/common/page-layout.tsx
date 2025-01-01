import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { cn } from "~/src/utils";

export const PageLayout = ({
  className,
  children,
  ...props
}: SafeAreaViewProps) => {
  return (
    <SafeAreaView
      className={cn("w-full h-full p-4", className)}
      edges={["top", "bottom"]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
