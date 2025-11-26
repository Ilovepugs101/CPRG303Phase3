// app/home.tsx
// Simple Home screen with header text and navigation buttons (example style).

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.text}>Stay productive today</Text>

      
      <Button title="Go to Pomodoro" onPress={() => router.push("/pomodoro-timer")} />
      <View style={{ height: 8 }} />
      <Button title="Go to Schedule" onPress={() => router.push("/schedule")} />
        <View style={{ height: 8 }} />
      <Button title="Go to Flashcards" onPress={() => router.push("/schedule")} />
        <View style={{ height: 8 }} />
      <Button title="Go to Schedule" onPress={() => router.push("/schedule")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
});
