import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#fff" },
        }}
        theme={{
          calendarBackground: "#4A90E2",
          dayTextColor: "#fff",
          monthTextColor: "#fff",
          textSectionTitleColor: "#fff",
          selectedDayBackgroundColor: "#fff",
          selectedDayTextColor: "#4A90E2",
          todayTextColor: "#ffd700",
          arrowColor: "#fff",
        }}
      />

      /* Show selected date */
      {selectedDate ? (
        <Text style={styles.dateText}>Selected: {selectedDate}</Text>
      ) : (
        <Text style={styles.dateText}>Please select a date</Text>
      )}

       /* Description */
      <View style={styles.card}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description..."
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      /* Attachments */
      <View style={styles.card}>
        <Text style={styles.label}>Attachments</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter link or filename..."
          placeholderTextColor="#888"
          value={attachment}
          onChangeText={setAttachment}
        />
      </View>

      /* Button */
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mark as Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2", 
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 50,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
    textAlign: "center",
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#020303ff",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#fafafa",
    color: "#333",
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#06080aff",
    fontWeight: "600",
    fontSize: 16,
  },
});
