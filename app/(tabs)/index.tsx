// app/home.tsx
// Simple Home screen with header text and navigation buttons (example style).

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subtext}>Stay productive today</Text>

        {/* Big purple Pomodoro card */}
        <View style={styles.bigCard}>
          <View style={styles.cardIconCircle}>
            <View style={styles.iconPlaceholder} />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Pomodoro</Text>
            <Text style={styles.cardSubtitle}>Focus Sessions</Text>
          </View>
        </View>

        {/* Schedule card */}
        <View style={styles.smallCard}>
          <View style={styles.smallIcon}>
            <View style={styles.iconPlaceholderSmall} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.smallTitle}>Schedule</Text>
            <Text style={styles.smallSubtitle}>Plan your day</Text>
          </View>
        </View>

        {/* Additional placeholder cards to match scroll feel */}
        <View style={styles.smallCard}>
          <View style={styles.smallIcon}><View style={styles.iconPlaceholderSmall} /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.smallTitle}>Flashcards</Text>
            <Text style={styles.smallSubtitle}>Study sessions</Text>
          </View>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000"
  },
  scroll: {
    padding: 20
  },
  welcome: {
    color: "#7C00A2",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 10
  },
  subtext: {
    color: "#cfcfcf",
    marginTop: 6,
    marginBottom: 12
  },
  bigCard: {
    backgroundColor: "#7C00A2",
    borderRadius: 12,
    padding: 18,
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 120,
  },
  cardIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
  },
  cardText: {
    flex: 1
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800"
  },
  cardSubtitle: {
    color: "#ffffff",
    marginTop: 6
  },
  smallCard: {
    backgroundColor: "#1D1D1D",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#7C00A2",
    flexDirection: "row",
    alignItems: "center",
  },
  smallIcon: {
    width: 46,
    height: 46,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#7C00A2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  iconPlaceholderSmall: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#7C00A2",
  },
  smallTitle: {
    color: "#7C00A2",
    fontSize: 20,
    fontWeight: "700"
  },
  smallSubtitle: {
    color: "#7C00A2",
    marginTop: 4
  },
});
