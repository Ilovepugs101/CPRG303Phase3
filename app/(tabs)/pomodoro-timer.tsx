// app/pomodoro-timer.tsx
// Pomodoro timer stub — placeholder UI for mock-up

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PomodoroTimer() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pomodoro Timer</Text>
      <Text style={styles.text}>Focus Sessions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:
    "center",
    justifyContent: "center",
    padding: 16
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20
  },
});
