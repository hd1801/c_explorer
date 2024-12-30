import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
