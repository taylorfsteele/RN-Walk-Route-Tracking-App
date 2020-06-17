import React, { useContext, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import { useFocusEffect } from "@react-navigation/native";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useFocusEffect(
    useCallback(() => {
      fetchTracks();
      return () => {}; //any cleanup goes here
    }, []),
  );

  if (!state.length) return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("TrackDetail", { _id: item._id })}>
              <ListItem
                chevron
                title={item.name}
                containerStyle={{
                  marginHorizontal: 8,
                  marginVertical: 8,
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TrackListScreen;
