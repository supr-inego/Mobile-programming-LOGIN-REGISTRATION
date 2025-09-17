import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState(
    "I am Jeremiah Fisher the backburner #TheSummerITurnedPretty"
  );
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();

  const pickImage = async () => {
    if (!isEditing) return; // only allow when editing profile
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout na bebe na?", // edit later 'Logout'
      "So mamiya na bebe na?", // edit later 'Do you really want to log out of your account?'
      [
        { text: "Pass", style: "cancel" }, // edit later 'cancel'
        { text: "Paspasi", style: "destructive", onPress: () => router.replace("/") }, // edit later 'Log Out'
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Profile Picture */}
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{
              uri: profileImage
                ? profileImage
                : "https://via.placeholder.com/120",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>

        {/* Edit Profile Button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={styles.editButtonText}>
            {isEditing ? "Save Profile" : "Edit Profile"}
          </Text>
        </TouchableOpacity>

        {/* Bio */}
        <View style={styles.card}>
          <Text style={styles.label}>Bio</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={bio}
              onChangeText={setBio}
              multiline
            />
          ) : (
            <Text style={styles.value}>{bio}</Text>
          )}
        </View>

        {/* Name */}
        <View style={styles.card}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Jeremiah Fisher</Text>
        </View>

        {/* Email */}
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>jeremiah.fisher@email.com</Text>
        </View>

        {/* Year & Section */}
        <View style={styles.card}>
          <Text style={styles.label}>Year & Section</Text>
          <Text style={styles.value}>BSIT - 3rd Year, R3</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#4A90E2",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#fbfbfcff",
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4A90E2",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    fontSize: 16,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
  },
  editButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  editButtonText: {
    color: "#4A90E2",
    fontWeight: "600",
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#FF5252",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
