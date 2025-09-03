import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.LogInHere}>
        <Text style={styles.LogInHereText}>Log In Here </Text>
        <View style={styles.InputContainer}>
          <FontAwesome
          name="user"
          size={20}
          color={"#9A9A9A"}
          style={styles.emailAddressIcon}
        />
        <TextInput
          style={styles.emailAddress}
          placeholder= "Enter email address"
          keyboardType='email-address'
          />
        </View>
         <View style={styles.passwordContainer}>
          <FontAwesome
          name="lock"
          size={20}
          color={"#9A9A9A"}
          style={styles.passwordIcon}
        />
        <TextInput
          style={styles.emailAddress}
          placeholder= "Enter Password"
          secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Link href="./registration">
          <Text>Create</Text>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B5B8F",
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  LogInHere: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 150,
  },
  LogInHereText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 250,
    paddingHorizontal: 30,
    height: 50,
    marginHorizontal: 20,
  },
  emailAddressIcon: {
    marginRight: 10,
  },
  emailAddress: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  passwordIcon: {
    marginRight: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 250,
    paddingHorizontal: 30,
    height: 50,
    marginHorizontal: 20,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 30,
    alignItems: 'center',
  },
  loginButtonText:{
    color: 'red',
    fontWeight: 'bold',

  },
  signContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  }
})

export default index