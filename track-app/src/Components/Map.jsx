import React, { useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <MapView
      initialRegion={{ ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
      region={{ ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
      style={styles.map}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
