import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const Map = () => {
  const isFocused = useIsFocused();
  const {
    addLocation,
    state: { currentLocation },
  } = useContext(LocationContext);
  const [errorMessage] = useLocation(isFocused, addLocation);

  if (!currentLocation) return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <>
      <MapView
        initialRegion={{ ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        style={styles.map}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
      </MapView>
      {errorMessage ? <Text>Please enable location permissions</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
