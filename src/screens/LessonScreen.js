import * as React from "react";
import Constants from "../components/Constants.js";
import { Text, View, Button, Alert } from "react-native";
import {
  updateBadgeState,
  updateLessonBadgeState,
  updateLessonAndWorldCompletion,
  checkAndIssueWorldBadge,
  storeWrapper,
  updateStreaksCount,
  checkAndIssueStreaksBadge,
} from "../components/Helpers";

function LessonScreen(props) {
  return (
    <View>
      <Text>Lesson Simulation</Text>
      <Button
        title="Click here to finish lesson (go back to home screen)"
        onPress={() => {
          updateBadgeState(
            Constants.LESSON_COMPLETION,
            Constants.LESSON_COMPLETION_1
          );
          updateLessonAndWorldCompletion(Constants.CURRENT_LESSON_PARENT);
          checkAndIssueWorldBadge();
          storeWrapper();
          props.navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
}

export default LessonScreen;
