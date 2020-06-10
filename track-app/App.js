import React from "react";
import { StyleSheet } from "react-native";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
