import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Spacing, Colors } from "../styles";

const AuthForm = ({ headerText, submitButtonText, errorMessage, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text style={styles.header} h3>
        {headerText}
      </Text>
      <Input
        containerStyle={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Input
        containerStyle={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Button
        buttonStyle={styles.button}
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    ...Spacing.baseMargin,
  },
  button: {
    ...Spacing.baseMargin,
    backgroundColor: Colors.primary,
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AuthForm;
