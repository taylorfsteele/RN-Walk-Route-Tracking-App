import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { Spacing } from "../styles";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>AccountScreen</Text>
      <Button buttonStyle={styles.button} title="Logout" onPress={signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    ...Spacing.baseMarginHorizontal,
  },
});

export default AccountScreen;
