import { PanGestureHandler } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { StyleSheet, View, Text } from "react-native";

const SIZE = 100.0;

export default function App() {
  const translateX = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event) => {
      console.log("starting...");
    },
    onActive: (event) => {
      // translateX.value = event.translationX;
      console.log(event.translationX);
    },
    onEnd: (event) => {},
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>{translateX.value}</Text>
        </View>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "dodgerblue",
    borderRadius: 15,
  },
});
