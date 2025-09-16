import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
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

  return (
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

      {/* Info Cards */}
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Jeremiah Fisher</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Year & Section</Text>
        <Text style={styles.value}>BSIT - 3rd Year, R3</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Bio</Text>
        <Text style={styles.value}>
          I am Jeremiah Fisher the backburner                                                   #The Summer I Turned Pretty.
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#f0f4f8ff",
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#020203ff",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
});
