// app/flashcards.tsx
// Flashcards study screen stub

import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";

export default function Flashcards() {
  const router = useRouter();
  const packs = [
    { id: "math-30-1", title: "Math 30-1", count: 67 },
    { id: "ela-30-1", title: "ELA 30-1", count: 67 },
    { id: "social-30-1", title: "Social Studies 30-1", count: 67 },
  ];

  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Flash Card Packs</Text>
        <Text style={styles.subtext}>What Packs of cards would you pick today?</Text>

        {packs.map((p, i) => (
          <TouchableOpacity
            key={p.id}
            style={styles.packCard}
            activeOpacity={0.8}
            onPress={() => router.push({ pathname: "/flashcards-info", params: { packId: p.id, title: p.title } })}
          >
            <Text style={styles.packTitle}>{p.title}</Text>
            <Text style={styles.packCount}>{p.count} Cards</Text>
          </TouchableOpacity>
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
