//import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import Map from "../Components/Map";
import TrackForm from "../Components/TrackForm";
import { ScrollView } from "react-native-gesture-handler";

const TrackCreateScreen = () => {
  console.count("TrackCreateScreen");
  return (
    <SafeAreaView>
      <ScrollView>
        <Text h2>Create a Track</Text>
        <Map />
        <TrackForm />
      </ScrollView>
    </SafeAreaView>
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
