//import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../Components/Map";
import TrackForm from "../Components/TrackForm";
import { ScrollView } from "react-native-gesture-handler";

const TrackCreateScreen = () => {
  return (
    <ScrollView>
      <Map />
      <TrackForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TrackCreateScreen;
