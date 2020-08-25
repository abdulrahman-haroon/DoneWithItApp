import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";

import * as Progress from "react-native-progress";
import color from "../config/color";

import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={color.primaryColor}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
});

export default UploadScreen;
