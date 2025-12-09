// app/schedule.tsx
// Schedule screen stub for the mock-up

import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Schedule() {
  // selectedDay contains currently selected day number (1-31)
  const [selectedDay, setSelectedDay] = useState<number | null>(20);

  // generate days 1..31
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // sample tasks for the selected day (static for mock)
  const tasksByDay: Record<number, { title: string; status: "done" | "pending" }[]> = {
    20: [{ title: "Math 30-1: Quiz Review", status: "done" }],
    22: [{ title: "ELA 30-1: Hamlet Essay", status: "done" }],
    24: [{ title: "Social Studies: Study", status: "pending" }],
  };

  const tasks = selectedDay ? tasksByDay[selectedDay] ?? [] : [];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Schedule</Text>
        <Text style={styles.subtext}>Plan your day</Text>

        {/* Calendar card */}
        <View style={styles.calendarCard}>
          {/* Month header */}
          <View style={styles.monthHeader}>
            <Text style={styles.monthText}>March 2025</Text>
          </View>

          {/* Weekday labels */}
          <View style={styles.weekRow}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <Text key={d} style={styles.weekday}>
                {d}
              </Text>
            ))}
          </View>

          {/* Grid of days */}
          <View style={styles.daysGrid}>
            {days.map((day) => {
              const isSelected = day === selectedDay;
              return (
                <TouchableOpacity
                  key={day}
                  onPress={() => setSelectedDay(day)}
                  style={[
                    styles.dayCell,
                    isSelected ? styles.dayCellActive : null,
                  ]}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.dayText, isSelected ? styles.dayTextActive : null]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Tasks card */}
        <View style={styles.tasksSection}>
          <View style={styles.tasksHeaderRow}>
            <Text style={styles.tasksTitle}>Tasks</Text>
          </View>

          {/* list tasks for chosen day (static mock) */}
          {tasks.length === 0 ? (
            <Text style={styles.noTasks}>No tasks for this day</Text>
          ) : (
            tasks.map((t, i) => (
              <View key={i} style={styles.taskCard}>
                <Text style={styles.taskCardText}>{t.title}</Text>
                <View
                  style={[
                    styles.statusDot,
                    t.status === "done" ? styles.green : styles.red,
                  ]}
                />
              </View>
            ))
          )}
        </View>

        <View style={{ height: 120 }} />
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
    paddingHorizontal: "5%",
    paddingTop: "6%"
  },
  header: {
    color: "#7C00A2",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8
  },
  subtext: {
    color: "#ffffff",
    marginBottom: 12
  },
  calendarCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: "4%",
    paddingHorizontal: "4%",
    // shadow/elevation (subtle)
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4
  },
  monthHeader: {
    alignItems: "center",
    marginBottom: "3%"
  },
  monthText: {
    color: "#000000",
    fontWeight: "600"
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2%"
  },
  weekday: {
    width: "13%",
    textAlign: "center",
    color: "#4a4a4a"
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  dayCell: {
    width: "13%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3%",
    borderRadius: 8
  },
  dayCellActive: {
    backgroundColor: "#7C00A2",
  },
  dayText: {
    color: "#1D1D1D"
  },
  dayTextActive: {
    color: "#ffffff",
    fontWeight: "700"
  },
  tasksSection: {
    marginTop: "5%",
    backgroundColor: "#000000",
    padding: "4%",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#7C00A2",
  },
  tasksHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tasksTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700"
  },
  plusButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#7C00A2",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700"
  },
  noTasks: {
    color: "#ffffff",
    marginTop: 12
  },
  taskCard: {
    backgroundColor: "#000000",
    padding: "3%",
    borderRadius: 8,
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskCardText: {
    color: "#ffffff",
    fontWeight: "700",
    flex: 1,
    marginRight: "4%"
  },
  statusDot: {
    width: 22,
    height: 22,
    borderRadius: 11
  },
  green: {
    backgroundColor: "#00B115"
  },
  red: {
    backgroundColor: "#B10000"
  },
});
