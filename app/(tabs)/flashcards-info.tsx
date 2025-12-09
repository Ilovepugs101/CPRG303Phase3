// app/flashcards-info.tsx
import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function FlashcardsInfo() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const title = (params?.title as string) ?? "Flashcards";

  // static sample cards for the mock-up — replace with real data later
  const cards = useMemo(
    () => [
      "What were the reasons why Ophelia went mad?",
      "Identify the key themes in Hamlet.",
      "How does the play explore the idea of revenge?",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const { width } = Dimensions.get("window");

  const prev = () => setIndex((s) => (s - 1 + cards.length) % cards.length);
  const next = () => setIndex((s) => (s + 1) % cards.length);

  return (
    <View style={styles.screen}>
      <Text style={[styles.title, { fontSize: width * 0.11 }]}>{title}</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.arrowLeft} onPress={prev} accessibilityLabel="previous">
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardText}>{cards[index]}</Text>
        </View>

        <TouchableOpacity style={styles.arrowRight} onPress={next} accessibilityLabel="next">
          <Ionicons name="chevron-forward" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* quick back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#000000",
        paddingHorizontal: "5%",
        paddingTop: "6%"
    },
  title: {
    color: "#7C00A2",
    fontWeight: "800",
    marginBottom: 10
    },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "6%",
  },
  card: {
    flex: 1,
    height: 320,
    backgroundColor: "#000000",
    borderRadius: 12,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: "6%",
  },
  cardText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700"
    },
  arrowLeft: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowRight: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    marginTop: 20,
    alignSelf: "center"
},
  backText: {
    color: "#ffffff"
},
})