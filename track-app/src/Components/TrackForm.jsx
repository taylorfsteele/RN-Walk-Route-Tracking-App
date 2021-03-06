import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { Spacing, Colors } from "../styles";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View style={styles.container}>
      <Input
        value={name}
        onChangeText={changeName}
        placeholder="Enter Track Name"
        containerStyle={styles.input}
      />
      {recording ? (
        <Button buttonStyle={styles.button} title="Stop" onPress={stopRecording} />
      ) : (
        <Button buttonStyle={styles.button} title="Start" onPress={startRecording} />
      )}
      {!recording && locations.length ? (
        <Button onPress={saveTrack} buttonStyle={styles.button} title="Save Recording" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Spacing.baseMargin,
  },
  input: {},
  button: { marginBottom: 16, backgroundColor: Colors.primary },
});

export default TrackForm;
