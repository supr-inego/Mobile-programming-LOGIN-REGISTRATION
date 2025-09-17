import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Index = () => {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace("/(tabs)/home"); // navigate to home
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/image43.png")}
        style={styles.logo}
      />

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        {/* Username */}
        <View style={styles.inputRow}>
          <MaterialCommunityIcons
            name="account-outline"
            size={20}
            color="#9A9A9A"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username, Phone or Email"
            placeholderTextColor="#9A9A9A"
          />
        </View>

        {/* Password */}
        <View style={[styles.inputRow, { marginTop: 12 }]}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={20}
            color="#9A9A9A"
          />
          <TextInput
            style={[styles.textInput, { flex: 1 }]}
            placeholder="Password"
            placeholderTextColor="#9A9A9A"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#9A9A9A"
            />
          </TouchableOpacity>
        </View>

        {/* Remember me + Forgot password */}
        <View style={styles.rowBetween}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <MaterialCommunityIcons
              name={rememberMe ? "checkbox-marked" : "checkbox-blank-outline"}
              size={18}
              color="#8e9292ff"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        {/* Or */}
        <Text style={styles.orText}>Or</Text>

        {/* Google + Facebook aligned */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialCommunityIcons name="google" size={20} color="#1877F2" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <MaterialCommunityIcons name="facebook" size={20} color="#1877F2" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up */}
        <View style={styles.signUpRow}>
          <Text style={styles.signUpText}>Don’t have an Account?</Text>
          <TouchableOpacity onPress={() => router.push("/registration")}>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    marginTop: 10,
  },
  textInput: {
    fontSize: 14,
    color: "#000",
    flex: 1,
    marginLeft: 8,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
  },
  forgotText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#3B82F6",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 10,
    color: "#9A9A9A",
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingVertical: 10,
    width: "48%",
  },
  socialText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  signUpRow: {
    flexDirection: "row",
    marginTop: 15,
  },
  signUpText: {
    fontSize: 13,
    color: "#000",
  },
  signUpLink: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#3B82F6",
  },
});

export default Index;
