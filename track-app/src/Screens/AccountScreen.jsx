import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { Spacing, Colors } from "../styles";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button buttonStyle={styles.button} title="Logout" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    ...Spacing.baseMargin,
  },
  button: {
    ...Spacing.baseMarginHorizontal,
    backgroundColor: Colors.primary,
  },
});

export default AccountScreen;
