import axios from "axios";
import { AsyncStorage } from "react-native";
import Constants from "expo-constants";
const url = Constants.manifest.extra.herokuUrl;

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
