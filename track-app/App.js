import React from "react";
import { StyleSheet } from "react-native";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <LocationProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({});
