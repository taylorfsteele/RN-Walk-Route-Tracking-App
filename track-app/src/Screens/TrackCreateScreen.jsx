//import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import { Text } from "react-native-elements";
import Map from "../Components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../Components/TrackForm";
import { ScrollView } from "react-native-gesture-handler";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const { addLocation, state } = useContext(LocationContext);
  const [errorMessage] = useLocation(isFocused, addLocation);
  console.log(state.recording);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text h2>Create a Track</Text>
        <Map />
        {errorMessage ? <Text>Please enable location permissions</Text> : null}
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
