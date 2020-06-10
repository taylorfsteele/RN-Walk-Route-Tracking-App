//import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import * as Location from "expo-location";
import Map from "../Components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const startWatching = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") return setErrorMessage(status);
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        },
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {errorMessage ? <Text>Please enable location permissions</Text> : null}
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
