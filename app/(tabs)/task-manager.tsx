// app/task-manager.tsx
// Task manager stub screen for your mock-up

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function TaskManager() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
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
