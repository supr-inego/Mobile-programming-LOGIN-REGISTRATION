import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Registration = () => {
  return (
    <LinearGradient
      colors={["#3B5B8F", "#FFFFFF"]} 
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Logo + Welcome */}
      <View style={styles.topContent}>
        <Image
          source={require("../assets/images/image42.png")}
          style={styles.logo}
        />
        <Text style={styles.LogInHereText}>WELCOME</Text>

        {/* Username input */}
        <View style={styles.InputContainer}>
          <FontAwesome name="user" size={20} color={"#9A9A9A"} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username, phone or email"
            keyboardType="email-address"
          />
        </View>

        {/* Password input */}
        <View style={styles.InputContainer}>
          <FontAwesome name="lock" size={20} color={"#9A9A9A"} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        {/* Email input */}
        <View style={styles.InputContainer}>
          <FontAwesome name="envelope" size={20} color={"#9A9A9A"} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        {/* Create account */}
        <TouchableOpacity style={styles.CreateAccount}>
          <Text style={styles.CreateAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      {/* Back to Login */}
      <View style={styles.signContainer}>
        <Text style={styles.signUpText}>Already have an account?</Text>
        <Link href="/">
          <Text style={{ color: "#000", fontWeight: "bold" }}>Go to Login</Text>
        </Link>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  topContent: {
    alignItems: "center",
    width: "100%",
    marginTop: 40,
  },
  logo: {
    width: 260,
    height: 200,
    resizeMode: "contain",
    marginBottom: 8,
  },
  LogInHereText: {
    color: "#000",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    marginTop: 12,
    width: "85%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  CreateAccount: {
    backgroundColor: "#000000",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 80,
    marginTop: 25,
    alignItems: "center",
  },
  CreateAccountText: {
    color: "white",
    fontWeight: "bold",
  },
  signContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  signUpText: {
    color: "#000",
    fontSize: 16,
    marginRight: 5,
  },
});

export default Registration;
