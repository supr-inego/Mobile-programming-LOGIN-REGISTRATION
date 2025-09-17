import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Math Assignment</Text>
        <Text style={styles.subtitle}>Due tomorrow 11:59pm</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Instructor 1 posted</Text>
        <Text style={styles.subtitle}>New activity in English</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Deadline</Text>
        <Text style={styles.subtitle}>September 20, 2025 — 11:59</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 5,
  },
  backText: {
    fontSize: 20,
    color: "#fff",
  },
  card: {
    marginTop: 100,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
});
