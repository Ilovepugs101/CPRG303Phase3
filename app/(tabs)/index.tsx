// app/home.tsx

import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter(); // <-- get the router

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subtext}>Stay productive today</Text>

        {/* Big Pomodoro Card */}
        <Pressable
          onPress={() => router.push("/pomodoro-timer")} // <-- navigate to "pomodoro" page
          style={({ pressed }) => [
            styles.bigCard,
            pressed && styles.pressedCardBig
          ]}
        >
          {({ pressed }) => (
            <>
              <View style={styles.cardIconCircle}>
                <View style={styles.iconPlaceholder} />
              </View>
              <View style={styles.cardText}>
                <Text style={[styles.cardTitle, pressed && { color: "#fff" }]}>Pomodoro</Text>
                <Text style={[styles.cardSubtitle, pressed && { color: "#fff" }]}>Focus Sessions</Text>
              </View>
            </>
          )}
        </Pressable>

        {/* Schedule Card */}
        <Pressable
          onPress={() => router.push("/schedule")} // <-- navigate to "schedule" page
          style={({ pressed }) => [
            styles.smallCard,
            pressed && styles.pressedCard
          ]}
        >
          {({ pressed }) => (
            <>
              <View style={styles.smallIcon}>
                <View style={[styles.iconPlaceholderSmall, pressed && { borderColor: "#fff" }]} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.smallTitle, pressed && { color: "#fff" }]}>Schedule</Text>
                <Text style={[styles.smallSubtitle, pressed && { color: "#fff" }]}>Plan your day</Text>
              </View>
            </>
          )}
        </Pressable>

        {/* Flashcards Card */}
        <Pressable
          onPress={() => router.push("/flashcards")}
          style={({ pressed }) => [
            styles.smallCard,
            pressed && styles.pressedCard
          ]}
        >
          {({ pressed }) => (
            <>
              <View style={styles.smallIcon}>
                <View style={[styles.iconPlaceholderSmall, pressed && { borderColor: "#fff" }]} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.smallTitle, pressed && { color: "#fff" }]}>Flashcards</Text>
                <Text style={[styles.smallSubtitle, pressed && { color: "#fff" }]}>Study sessions</Text>
              </View>
            </>
          )}
        </Pressable>

        {/* Task Manager Card */}
        <Pressable
          onPress={() => router.push("/task-manager")}
          style={({ pressed }) => [
            styles.smallCard,
            pressed && styles.pressedCard
          ]}
        >
          {({ pressed }) => (
            <>
              <View style={styles.smallIcon}>
                <View style={[styles.iconPlaceholderSmall, pressed && { borderColor: "#fff" }]} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.smallTitle, pressed && { color: "#fff" }]}>Task Manager</Text>
                <Text style={[styles.smallSubtitle, pressed && { color: "#fff" }]}>Manage Work</Text>
              </View>
            </>
          )}
        </Pressable>

        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
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

  /* --- Big Purple Card --- */
  bigCard: {
    backgroundColor: "#7C00A2",
    borderRadius: 12,
    padding: 18,
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 120,
  },
  activeBigCard: {
    backgroundColor: "#52006E",
    borderColor: "#fff",
    borderWidth: 2,
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
  activeIconCircle: {
    borderColor: "#fff"
  },

  iconPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
  },
  activeIconInner: {
    borderColor: "#fff"
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

  /* --- Small Cards --- */
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
  activeCard: {
    backgroundColor: "#7C00A2",
    borderColor: "#ffffff",
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
  activeIcon: {
    borderColor: "#ffffff",
  },

  iconPlaceholderSmall: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#7C00A2",
  },

  activeText: {
    color: "#fff",
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
