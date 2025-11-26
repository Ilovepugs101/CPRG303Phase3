// app/schedule.tsx
// Schedule screen stub for the mock-up

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule</Text>
      <Text style={styles.text}>Plan your day</Text>
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
