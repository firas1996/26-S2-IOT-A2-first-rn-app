import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
// Test
const Home = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://10.33.5.4:1122/api/mqtt")
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <Button title="Get MQTT Data" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
