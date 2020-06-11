import { useState, useEffect } from "react";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

export default (shouldTrack, callbackFunction) => {
  const [errorMessage, setErrorMessage] = useState(null);
  //const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) throw new Error("Location permission not granted");

        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callbackFunction,
        );
      } catch (error) {
        setErrorMessage(error);
      }
    };
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callbackFunction]);

  return [errorMessage];

  // const startWatching = async () => {
  //   try {
  //     let { granted } = await requestPermissionsAsync();
  //     if (!granted) throw new Error("Location permission not granted");
  //     const sub = await watchPositionAsync(
  //       {
  //         accuracy: Accuracy.BestForNavigation,
  //         timeInterval: 1000,
  //         distanceInterval: 10,
  //       },
  //       callback,
  //     );
  //     setSubscriber(sub);
  //   } catch (error) {
  //     setErrorMessage(error);
  //   }
  // };

  // useEffect(() => {
  //   if (shouldTrack) startWatching();
  //   if (!shouldTrack) {
  //     subscriber.remove();
  //     setSubscriber(null);
  //   }
  // }, [shouldTrack]);

  // return [errorMessage];
};
