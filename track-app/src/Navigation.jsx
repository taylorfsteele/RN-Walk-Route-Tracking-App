import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./Screens/AccountScreen";
import SigninScreen from "./Screens/SigninScreen";
import SignupScreen from "./Screens/SignupScreen";
import TrackCreateScreen from "./Screens/TrackCreateScreen";
import TrackDetailScreen from "./Screens/TrackDetailScreen";
import TrackListScreen from "./Screens/TrackListScreen";
import SplashScreen from "./Screens/SplashScreen";
import { Context as AuthContext } from "./context/AuthContext";

const TrackListStack = createStackNavigator();

function TrackListStackScreens() {
  return (
    <TrackListStack.Navigator initialRouteName={"Track List"}>
      <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackListStack.Screen name="TrackDetails" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const { state } = useContext(AuthContext);

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {state.token ? (
        <Tab.Navigator initialRouteName={"TrackListStack"}>
          <Tab.Screen name="TrackListStack" component={TrackListStackScreens} />
          <Tab.Screen name="CreateTrack" component={TrackCreateScreen} />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              title: "Account Screen",
              animationTypeForReplace: state.isSignout ? "pop" : "push",
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={"SignIn"}>
          <Stack.Screen name="SignIn" component={SigninScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
