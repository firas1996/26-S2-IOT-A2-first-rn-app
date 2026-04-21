import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 32 }}>Login</Text>
      <View style={styles.card}>
        <View style={styles.vInp}>
          <Text style={styles.txt}>Email</Text>
          <TextInput style={styles.inp} />
        </View>
        <View style={styles.vInp}>
          <Text style={styles.txt}>Password</Text>
          <TextInput style={styles.inp} />
        </View>
        <View style={styles.btn}>
          <Button title="Login" />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    borderWidth: 1,
    height: "30%",
    borderRadius: 12,
    width: "60%",
    marginTop: 25,
    padding: 12,
    borderColor: "gray",
    backgroundColor: "#f6f98f",
  },
  vInp: {
    alignItems: "flex-start",
    marginBottom: 15,
  },
  txt: {
    fontSize: 18,
    marginBottom: 10,
  },
  inp: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    borderColor: "gray",
    width: "100%",
  },
  btn: {
    marginTop: "auto",
    marginBottom: 10,
  },
});
