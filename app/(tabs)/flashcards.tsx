// app/flashcards.tsx
// Flashcards study screen stub

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Flashcards() {
  const packs = [
    { title: "Math 30-1", count: 67 },
    { title: "ELA 30-1", count: 67 },
    { title: "Social Studies 30-1", count: 67 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Flash Card Packs</Text>
        <Text style={styles.subtext}>What Packs of cards would you pick today?</Text>

        {packs.map((p, i) => (
          <View key={i} style={styles.packCard}>
            <Text style={styles.packTitle}>{p.title}</Text>
            <Text style={styles.packCount}>{p.count} Cards</Text>
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
