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
    backgroundColor: "#000000"
  },
  scroll: {
    padding: 20
  },
  header: {
    color: "#7C00A2",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6
  },
  subtext: {
    color: "#cfcfcf",
    marginTop: 6,
    marginBottom: 12
  },
  packCard: {
    backgroundColor: "#1D1D1D",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 10,
    width: "100%",
  },
  packTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "800"
  },
  packCount: {
    color: "#ffffff",
    marginTop: 6
  },
});
