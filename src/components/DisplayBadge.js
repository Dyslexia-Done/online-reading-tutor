import * as React from "react";
import Constants from "../components/Constants.js";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  renderWorldBadges,
  renderStreakImages,
  renderLessonImages,
} from "../components/Helpers.js";

// import styles
import variables from "../styles/variables";

const DisplayBadge = (props) => {
  // props is the badges object:
  // [0] -> [0] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  //     -> [1] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  // [1] -> [0] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  //     -> [1] -> {badgeId: .. , badgeName: .. , badgeState: ..}
  // ...
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson badges</Text>
      <ScrollView horizontal={true} style={styles.badgeContainer}>
        {renderLessonImages(props.badges[Constants.LESSON_COMPLETION])}
      </ScrollView>
      <Text style={styles.title}>World badges</Text>
      <ScrollView horizontal={true} style={styles.badgeContainer}>
        {renderWorldBadges(props.badges[Constants.WORLD_COMPLETION])}
      </ScrollView>
      <Text style={styles.title}>Streak badges</Text>
      <ScrollView horizontal={true} style={styles.badgeContainer}>
        {renderStreakImages(props.badges[Constants.STREAKS])}
      </ScrollView>
    </View>
  );
};

export default DisplayBadge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginLeft: 5
  },
  badgeContainer: {
    height: 130,
    marginBottom: 5
  },
  title: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    marginBottom: 5
  },
});
