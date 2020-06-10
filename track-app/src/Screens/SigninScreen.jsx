import React, { useContext, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
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
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <AuthForm
          headerText="Sign In to Tracker"
          submitButtonText="Sign In"
          errorMessage={state.errorMessage}
          //This is equivalent to ({ email, password}) => signin({ email, password })
          onSubmit={signin}
        />
        <NavLink title="Don't have an account? Sign up instead" routeName="SignUp" />
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

export default SigninScreen;
