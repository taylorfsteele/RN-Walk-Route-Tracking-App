import React from "react";
import { StyleSheet } from "react-native";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}

const styles = StyleSheet.create({});
