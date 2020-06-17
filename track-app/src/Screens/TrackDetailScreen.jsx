import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import { Button } from "react-native-elements";
import { Spacing } from "../styles";

const TrackDetailScreen = ({ navigation, route }) => {
  const { state } = useContext(TrackContext);
  const _id = route.params._id;
  const track = state.find((track) => track._id === _id);
  const initialCoords = track.locations[0].coords;

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: track.name });
  }, [navigation, route]);

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((geo) => geo.coords)} />
      </MapView>
      <View style={styles.container}>
        <Button title="Delete Track" disabled />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  container: {
    ...Spacing.baseMargin,
  },
});

export default TrackDetailScreen;
