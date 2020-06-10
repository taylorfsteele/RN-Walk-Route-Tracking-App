import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Spacing } from "../styles";

const NavLink = ({ title, routeName }) => {
  const navigation = useNavigation();

  return (
    <Button
      buttonStyle={styles.button}
      title={title}
      type="clear"
      onPress={() => navigation.navigate(routeName)}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    ...Spacing.baseMarginHorizontal,
  },
});

export default NavLink;
