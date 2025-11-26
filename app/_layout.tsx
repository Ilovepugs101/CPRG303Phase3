// app/_layout.tsx
// Correct tab order and explicit icons. Use size/color passed from expo-router.
// Make sure the files exist: app/home.tsx, app/pomodoro-timer.tsx, app/schedule.tsx,
// app/flashcards.tsx, app/task-manager.tsx

import React from "react";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000000", height: 60 },
        tabBarActiveTintColor: "#7C00A2",
        tabBarInactiveTintColor: "#FFFFFF",
        headerShown: false,
      }}
    >
      {/* 1) HOME (first) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* 2) POMODORO (second) */}
      <Tabs.Screen
        name="pomodoro-timer"
        options={{
          title: "Pomodoro",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* 3) SCHEDULE (third) */}
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* 4) FLASHCARDS (fourth) */}
      <Tabs.Screen
        name="flashcards"
        options={{
          title: "Flashcards",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="auto-stories" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* 5) TASK MANAGER (fifth) */}
      <Tabs.Screen
        name="task-manager"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="check-circle" size={size ?? 22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
