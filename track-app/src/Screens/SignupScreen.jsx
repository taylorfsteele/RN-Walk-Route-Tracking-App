import React, { useContext, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={"padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : -384}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <AuthForm
          headerText="Sign Up for Tracker"
          submitButtonText="Sign Up"
          errorMessage={state.errorMessage}
          //This is equivalent to ({ email, password}) => signup({ email, password })
          onSubmit={signup}
        />
        <NavLink title="Already have an account? Sign in instead" routeName="SignIn" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: "5%",
  },
});

export default SignupScreen;
