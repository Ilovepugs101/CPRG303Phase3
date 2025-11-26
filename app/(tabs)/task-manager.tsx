// app/task-manager.tsx
// Task manager stub screen for your mock-up

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TaskManager() {
  const items = [
    { day: "Wednesday", title: "Math 30-1: Exponents Quiz Review", status: "done" },
    { day: "Wednesday", title: "ELA 30-1: Hamlet Essay Review", status: "done" },
    { day: "Friday", title: "Social Studies 30-1: Nationalism Essay Study", status: "pending" },
  ];

  // group items by day for display (simple static grouping for screenshot)
  const grouped = {
    Wednesday: items.filter((i) => i.day === "Wednesday"),
    Friday: items.filter((i) => i.day === "Friday"),
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Task Manager</Text>

        <Text style={styles.dayLabel}>Wednesday</Text>
        {grouped.Wednesday.map((it, idx) => (
          <View key={`w${idx}`} style={styles.taskCard}>
            <Text style={styles.taskTitle}>{it.title}</Text>
            <View style={[styles.statusCircle, it.status === "done" ? styles.green : styles.red]} />
          </View>
        ))}

        <Text style={styles.dayLabel}>Friday</Text>
        {grouped.Friday.map((it, idx) => (
          <View key={`f${idx}`} style={styles.taskCard}>
            <Text style={styles.taskTitle}>{it.title}</Text>
            <View style={[styles.statusCircle, it.status === "done" ? styles.green : styles.red]} />
          </View>
        ))}

        <View style={{ height: 90 }} />
      </ScrollView>
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
