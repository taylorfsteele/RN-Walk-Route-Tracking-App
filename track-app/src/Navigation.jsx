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
import { navigationRef } from "./RootNavigation";
import { Feather } from "@expo/vector-icons";

const TrackListStack = createStackNavigator();

function TrackListStackScreens() {
  return (
    <TrackListStack.Navigator initialRouteName={"Track List"}>
      <TrackListStack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ title: "Saved Tracks" }}
      />
      <TrackListStack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{ title: "" }}
      />
    </TrackListStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const { state } = useContext(AuthContext);

  // if (state.isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      {state.token ? (
        <Tab.Navigator initialRouteName={"TrackListStack"}>
          <Tab.Screen
            name="TrackListStack"
            component={TrackListStackScreens}
            options={{
              tabBarLabel: "Tracks",
              tabBarIcon: ({ color, size }) => <Feather name="map" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="CreateTrack"
            component={TrackCreateScreen}
            options={{
              tabBarLabel: "Record Track",
              tabBarIcon: ({ color, size }) => <Feather name="map-pin" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
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
