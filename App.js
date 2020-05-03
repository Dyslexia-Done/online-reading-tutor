import * as React from "react";

// for the navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import page components
import BadgeScreen from "./src/screens/BadgeScreen";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LessonMapScreen from "./src/screens/LessonMapScreen";
import LessonScreen from "./src/screens/LessonScreen";
import MinigameScreen from "./src/screens/MinigameScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// import styles
import variables from "./src/styles/variables";
import * as DataObject from "./src/components/Database";
import { startUp } from "./src/components/Helpers";

const Stack = createStackNavigator();

function App() {
  // Start up stuff before rendering anything
  startUp();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: variables.palette.gray.uiBackground
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: variables.palette.white.primary
          }
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Lessons"
          options={{ title: "Lessons" }}
          component={LessonMapScreen}
        />
        <Stack.Screen
          name="Game"
          options={{ title: "Game" }}
          component={GameScreen}
        />
        <Stack.Screen name="Lesson">
          {(props) => (
            <LessonScreen {...props}/>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Minigame"
          options={{ title: "Minigame Simulation" }}
          component={MinigameScreen}
        />
        <Stack.Screen name="Badges">
          {(props) => (
            <BadgeScreen {...props} badges={DataObject.Data.BADGES} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => (
            <ProfileScreen {...props} badges={DataObject.Data.BADGES} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
