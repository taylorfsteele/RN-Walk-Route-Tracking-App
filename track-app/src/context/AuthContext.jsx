import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return {
        ...state,
        token: action.payload,
        errorMessage: "",
        isLoading: false,
        isSignout: false,
      };
    case "add_error":
      return { ...state, errorMessage: action.payload, isLoading: false };
    case "signout":
      return { token: null, errorMessage: "", isLoading: false, isSignout: true };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) dispatch({ type: "signin", payload: token });
    else dispatch({ type: "signout" });
  } catch (error) {
    dispatch({ type: "add_error", payload: "Something went wrong with stored credentials" });
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    // react navigation automatically changes screen based on state.token. See Navigation.jsx.
  } catch (error) {
    dispatch({ type: "add_error", payload: "Something went wrong with sign-up" });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    // react navigation automatically changes screen based on state.token. See Navigation.jsx.
  } catch (error) {
    dispatch({ type: "add_error", payload: "Something went wrong with sign-in" });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "", isLoading: true, isSignout: false },
);
