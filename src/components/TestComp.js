import { StyleSheet, Text, View } from "react-native";

const TestComp = ({ name, getData }) => {
  const x = "World!";
  getData(x);
  return (
    <View>
      <Text>Welcome, {name} !</Text>
    </View>
  );
};

export default TestComp;

const styles = StyleSheet.create({});
