import { useState, useEffect } from "react";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

export default (shouldTrack, callback) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      let { status } = await requestPermissionsAsync();
      if (status !== "granted") return setErrorMessage(status);
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
      );
      setSubscriber(sub);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    if (shouldTrack) startWatching();
    if (!shouldTrack) subscriber.remove() && setSubscriber(null);
  }, [shouldTrack]);

  return [errorMessage];
};
