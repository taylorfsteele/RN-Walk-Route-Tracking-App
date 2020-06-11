import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { Spacing } from "../styles";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);
  return (
    <View style={styles.container}>
      <Input
        value={name}
        onChangeText={changeName}
        placeholder="Enter Track Name"
        containerStyle={styles.input}
      />
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start" onPress={startRecording} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Spacing.baseMargin,
  },
  input: {},
  button: {},
});

export default TrackForm;
