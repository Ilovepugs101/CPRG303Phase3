// app/pomodoro-timer.tsx
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SessionType = "focus" | "short" | "long";
type SessionStatus = "completed" | "missed";

interface SessionRecord {
  id: string;
  type: SessionType;
  status: SessionStatus;
  timestamp: number;
}

// Session durations (seconds)
const SESSION_DURATION = {
  focus: 25 * 60,
  short: 15 * 60,
  long: 35 * 60,
};

// Break durations
const BREAK_DURATION = {
  focus: 10 * 60,
  short: 5 * 60,
  long: 15 * 60,
};

export default function PomodoroTimer() {
  const [currentType, setCurrentType] = useState<SessionType>("focus");
  const [timeLeft, setTimeLeft] = useState(SESSION_DURATION.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [history, setHistory] = useState<SessionRecord[]>([]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          finishTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const finishTimer = () => {
    setIsRunning(false);

    const session: SessionRecord = {
      id: Date.now().toString(),
      type: currentType,
      status: "completed",
      timestamp: Date.now(),
    };
    setHistory((prev) => [...prev, session]);

    if (!isBreak) {
      setIsBreak(true);
      setTimeLeft(BREAK_DURATION[currentType]);
    } else {
      setIsBreak(false);
      setTimeLeft(SESSION_DURATION[currentType]);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsBreak(false);
    setIsRunning(false);
    setTimeLeft(SESSION_DURATION[currentType]);
  };

  const missSession = () => {
    const record: SessionRecord = {
      id: Date.now().toString(),
      type: currentType,
      status: "missed",
      timestamp: Date.now(),
    };
    setHistory((prev) => [...prev, record]);
  };

  const resetHistory = () => setHistory([]);

  const switchType = (type: SessionType) => {
    if (isRunning) return;
    setCurrentType(type);
    setIsBreak(false);
    setTimeLeft(SESSION_DURATION[type]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.header}>Pomodoro Timer</Text>
      <Text style={styles.subtext}>{isBreak ? "Break Time" : "Stay focused today."}</Text>

      {/* Timer Box */}
      <View style={styles.timerBox}>
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.button,
              { flex: 1, marginHorizontal: 4 },
              isRunning ? { backgroundColor: "#7C00A2" } : { backgroundColor: "#555" },
            ]}
            onPress={start}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { flex: 1, marginHorizontal: 4 },
              !isRunning ? { backgroundColor: "#7C00A2" } : { backgroundColor: "#555" },
            ]}
            onPress={pause}
          >
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { flex: 1, marginHorizontal: 4, backgroundColor: "#B00020" },
            ]}
            onPress={reset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Miss session */}
      <TouchableOpacity
        style={[styles.bigButton, { backgroundColor: "#B00020" }]}
        onPress={missSession}
        disabled={isRunning}
      >
        <Text style={styles.bigButtonText}>Mark as Missed</Text>
      </TouchableOpacity>

      {/* Session Type Buttons at bottom */}
      <View style={styles.buttonRow}>
        {(["focus", "short", "long"] as SessionType[]).map((t) => {
          const active = currentType === t && !isBreak;
          return (
            <TouchableOpacity
              key={t}
              style={[
                styles.button,
                { flex: 1, marginHorizontal: 4 },
                active ? { backgroundColor: "#7C00A2" } : { backgroundColor: "#1D1D1D" },
              ]}
              onPress={() => switchType(t)}
              disabled={isRunning}
            >
              <Text style={styles.buttonText}>
                {t === "focus"
                  ? "Focus (25m)"
                  : t === "short"
                  ? "Short (15m)"
                  : "Long (35m)"}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Session History */}
      <Text style={styles.historyHeader}>Today's Sessions</Text>
      {history.length === 0 ? (
        <Text style={{ color: "#777", marginTop: 10 }}>No sessions yet today.</Text>
      ) : (
        history
          .slice()
          .reverse()
          .map((h) => (
            <View key={h.id} style={styles.historyCard}>
              <Text style={styles.historyText}>
                {h.type.toUpperCase()} — {h.status === "completed" ? "✓" : "✗"}
              </Text>
            </View>
          ))
      )}

      <TouchableOpacity
        style={[styles.bigButton, { backgroundColor: "#444" }]}
        onPress={resetHistory}
      >
        <Text style={styles.bigButtonText}>Reset History</Text>
      </TouchableOpacity>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: { color: "#7C00A2", fontSize: 28, fontWeight: "800", marginBottom: 6 },
  subtext: { color: "#cfcfcf", marginBottom: 20 },

  // Timer box
  timerBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  timer: { color: "#7C00A2", fontSize: 72, fontWeight: "800", textAlign: "center", marginBottom: 20 },

  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 6 },
  button: { paddingVertical: 14, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  bigButton: { marginTop: 20, paddingVertical: 16, borderRadius: 12, alignItems: "center" },
  bigButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  historyHeader: { color: "#fff", marginTop: 30, fontSize: 20, fontWeight: "700" },
  historyCard: { backgroundColor: "#1D1D1D", padding: 12, borderRadius: 10, marginVertical: 6 },
  historyText: { color: "#eee", fontSize: 15 },
});
