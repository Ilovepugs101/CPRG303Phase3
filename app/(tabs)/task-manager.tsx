import { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TaskManager() {
  const [items, setItems] = useState([
    { day: "Wednesday", title: "Math 30-1: Exponents Quiz Review", status: "done" },
    { day: "Wednesday", title: "ELA 30-1: Hamlet Essay Review", status: "done" },
    { day: "Friday", title: "Social Studies 30-1: Nationalism Essay Study", status: "pending" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDay, setNewDay] = useState("Monday");

  const [dayModalVisible, setDayModalVisible] = useState(false);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  function addTask() {
    if (!newTitle.trim()) return;

    setItems((prev) => [
      ...prev,
      { day: newDay, title: newTitle.trim(), status: "pending" },
    ]);

    setNewTitle("");
    setNewDay("Monday");
  }

  const grouped = days.reduce((acc, d) => {
    acc[d] = items.filter((i) => i.day === d);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Task Manager</Text>

        {/* ---------------- ADD TASK FORM ---------------- */}
        <View style={styles.form}>
          <Text style={styles.formLabel}>Add a Task</Text>

          <TextInput
            placeholder="Task title"
            placeholderTextColor="#666"
            value={newTitle}
            onChangeText={setNewTitle}
            style={styles.input}
          />

          {/* Custom Dropdown */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setDayModalVisible(true)}
          >
            <Text style={styles.dropdownText}>{newDay}</Text>
          </TouchableOpacity>

          {/* Modal for day selection */}
          <Modal
            transparent
            animationType="fade"
            visible={dayModalVisible}
            onRequestClose={() => setDayModalVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPress={() => setDayModalVisible(false)}
              activeOpacity={1}
            >
              <View style={styles.modalBox}>
                {days.map((d) => (
                  <TouchableOpacity
                    key={d}
                    style={styles.modalItem}
                    onPress={() => {
                      setNewDay(d);
                      setDayModalVisible(false);
                    }}
                  >
                    <Text style={styles.modalItemText}>{d}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableOpacity>
          </Modal>

          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>

        {/* ---------------- TASK LIST ---------------- */}
        {days.map((day) => (
          <View key={day}>
          {grouped[day].length > 0 && <Text style={styles.dayLabel}>{day}</Text>}

          {grouped[day].map((it, idx) => (
            <TouchableOpacity
              key={`${day}${idx}`}
              style={styles.taskCard}
              onPress={() => {
                setItems((prev) =>
                  prev.map((task, tIndex) =>
                    tIndex === items.indexOf(it)
                      ? { ...task, status: task.status === "done" ? "pending" : "done" }
                      : task
                  )
                );
              }}
            >
              <Text style={styles.taskTitle}>{it.title}</Text>
              <View
                style={[
                  styles.statusCircle,
                  it.status === "done" ? styles.green : styles.red,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}

        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scroll: {
    padding: 20,
  },
  header: {
    color: "#7C00A2",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 12,
  },

  /* FORM */
  form: {
    backgroundColor: "#1D1D1D",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  formLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#2A2A2A",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  /* Dropdown */
  dropdown: {
    backgroundColor: "#2A2A2A",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  dropdownText: {
    color: "#fff",
    fontSize: 16,
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 20,
  },
  modalBox: {
    backgroundColor: "#1D1D1D",
    borderRadius: 10,
    paddingVertical: 10,
  },
  modalItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  modalItemText: {
    color: "#fff",
    fontSize: 16,
  },

  /* Add Button */
  addButton: {
    backgroundColor: "#7C00A2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  /* TASK LIST */
  dayLabel: {
    color: "#fff",
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 8,
    fontSize: 16,
  },
  taskCard: {
    backgroundColor: "#1D1D1D",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
    marginRight: 12,
  },
  statusCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  green: {
    backgroundColor: "#12ca57",
  },
  red: {
    backgroundColor: "#d93838",
  },
});

