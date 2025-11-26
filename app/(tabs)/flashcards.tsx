// app/flashcards.tsx
// Flashcards study screen stub

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Flashcards() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flash Card Packs</Text>
      <Text style={styles.text}>What Packs of cards would you pick today?</Text>
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
