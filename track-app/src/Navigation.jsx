import React, { useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
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
import { Colors } from "./styles";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
  },
};

const screenOptions = {
  headerStyle: { backgroundColor: Colors.primary },
  headerTintColor: Colors.tint,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const TrackListStack = createStackNavigator();
const TrackListStackScreens = () => {
  return (
    <TrackListStack.Navigator initialRouteName={"Track List"} screenOptions={screenOptions}>
      <TrackListStack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: "Saved Tracks",
        }}
      />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CreateStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Record Track" component={TrackCreateScreen} />
    </Stack.Navigator>
  );
};
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{ headerTitle: "Account" }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const { state } = useContext(AuthContext);

  // if (state.isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
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
            component={CreateStack}
            options={{
              tabBarLabel: "Record Track",
              tabBarIcon: ({ color, size }) => <Feather name="map-pin" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountStack}
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
