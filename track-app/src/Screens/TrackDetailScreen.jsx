import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>TrackDetailScreen</Text>
      <Button title="Go To List" onPress={() => navigation.navigate("TrackList")} />
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

export default TrackDetailScreen;
