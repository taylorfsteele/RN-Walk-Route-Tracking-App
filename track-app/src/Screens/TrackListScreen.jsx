import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>TrackListScreen</Text>
      <Button title="Go To List" onPress={() => navigation.navigate("TrackDetails")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TrackListScreen;
