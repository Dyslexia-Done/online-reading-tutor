import * as React from "react";
import {
  Platform, StyleSheet, Text, View, Dimensions
} from "react-native";

// internal components
import { StartButton, BottomSheet } from "../components/index";


const instructions = Platform.select({
  ios: "Press Cmd+R to reload for ios,\nCmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu"
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});


class HomeScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      editMode: false
    };
  }

  toggleEditState() {
    this.setState((prevState) => {
      const newState = !prevState.editMode;
      return {
        editMode: newState
      };
    });
  }

  render() {
    const { editMode } = this.state;
    const modalHeight = 2 * (Dimensions.get("screen").height / 3);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Reading Tutor!</Text>
        <Text style={styles.instructions}>To get started, click here!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <StartButton
          text="Click here to go to the Lessons page"
          onPress={() => this.props.navigation.navigate("Lessons")}
        />
        <StartButton
          text="Badges"
          onPress={() => this.props.navigation.navigate("Badges")}
        />
        <StartButton
          text="Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <StartButton
          text="click here for modal"
          onPress={() => this.toggleEditState()}
        />
        <BottomSheet onDismiss={() => this.toggleEditState()} visible={editMode} height={modalHeight}>
          <Text>Modal Child</Text>
        </BottomSheet>
      </View>
    );
  }
}

export default HomeScreen;
