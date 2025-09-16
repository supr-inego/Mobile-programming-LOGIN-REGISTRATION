import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

// Enable LayoutAnimation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Dashboard() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [completedTasks, setCompletedTasks] = useState({}); 

  const toggleExpand = (cardId) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const markAsDone = (cardId) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Hello, Jeremiah!</Text>
      <Text style={styles.taskProgress}>3 Tasks are available</Text>

      {/* Assignment Cards */}
      <TouchableOpacity style={styles.card} onPress={() => toggleExpand(1)}>
        <Text
          style={[
            styles.title,
            completedTasks[1] && { textDecorationLine: "line-through", color: "gray" },
          ]}
        >
          Software Engineering
        </Text>
        {expandedCard === 1 && (
          <View style={styles.details}>
            <Text style={styles.label}>Instructor:</Text>
            <Text style={styles.text}>Mr. Tumamak, Mario Marlon</Text>
            <Text style={styles.label}>Deadline:</Text>
            <Text style={styles.text}>Sept 20, 2025 – 11:59 PM</Text>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.text}>
              Create a project proposal for a mobile-based student management
              system. The proposal should include problem statement, objectives,
              scope, and initial UI wireframes.
            </Text>

            {/* Mark as Done Button */}
            <TouchableOpacity
              style={[
                styles.doneButton,
                completedTasks[1] && styles.doneButtonCompleted,
              ]}
              onPress={() => markAsDone(1)}
            >
              <Text style={styles.doneButtonText}>
                {completedTasks[1] ? "Marked as Done" : "Mark as Done"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => toggleExpand(2)}>
        <Text
          style={[
            styles.title,
            completedTasks[2] && { textDecorationLine: "line-through", color: "gray" },
          ]}
        >
          Elective 1
        </Text>
        {expandedCard === 2 && (
          <View style={styles.details}>
            <Text style={styles.label}>Instructor:</Text>
            <Text style={styles.text}>Mr. Miñoza, Dario C. Jr.</Text>
            <Text style={styles.label}>Deadline:</Text>
            <Text style={styles.text}>Sept 21, 2025 – 6:00 PM</Text>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.text}>
              Research about IoT security challenges          (e.g., hacking, privacy issues). Write a 2-page reflection.
            </Text>

            <TouchableOpacity
              style={[
                styles.doneButton,
                completedTasks[2] && styles.doneButtonCompleted,
              ]}
              onPress={() => markAsDone(2)}
            >
              <Text style={styles.doneButtonText}>
                {completedTasks[2] ? "Marked as Done" : "Mark as Done"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => toggleExpand(3)}>
        <Text
          style={[
            styles.title,
            completedTasks[3] && { textDecorationLine: "line-through", color: "gray" },
          ]}
        >
          Mobile Programming
        </Text>
        {expandedCard === 3 && (
          <View style={styles.details}>
            <Text style={styles.label}>Instructor:</Text>
            <Text style={styles.text}>Mr. Mananggit, Rochell Mark</Text>
            <Text style={styles.label}>Deadline:</Text>
            <Text style={styles.text}>Sept 27, 2025 – 5:00 PM</Text>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.text}>
              Create a simple login screen using React Native. It should have fields for email, password, and a login button.
               Design should be neat and user-friendly.
            </Text>

            <TouchableOpacity
              style={[
                styles.doneButton,
                completedTasks[3] && styles.doneButtonCompleted,
              ]}
              onPress={() => markAsDone(3)}
            >
              <Text style={styles.doneButtonText}>
                {completedTasks[3] ? "Marked as Done" : "Mark as Done"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  taskProgress: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  label: {
    fontWeight: "bold",
    marginTop: 5,
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  doneButton: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#4A90E2",
    borderRadius: 8,
    alignItems: "center",
  },
  doneButtonCompleted: {
    backgroundColor: "#28a745",
  },
  doneButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
