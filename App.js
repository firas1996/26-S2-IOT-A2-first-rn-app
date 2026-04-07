import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TestComp from "./src/components/TestComp";
import { useState } from "react";

export default function App() {
  const name = "Firas";
  const [data, setData] = useState("");
  const getData = (data) => {
    setData(data);
    // console.log(ss);
  };
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
        Hello, {data}
      </Text>
      <TestComp name={name} getData={getData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
