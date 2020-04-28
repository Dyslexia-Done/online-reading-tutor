import * as React from "react";
import Constants from "../components/Constants.js";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { alertBadgeAcquired } from "../components/BadgeHelpers";

/*TODO:

1. Use better data structure for question and answers 
2. Clear previous questiona and load next question on the screen after an answer is selected
3. Play sound file for word when question is clicked
4. keep track of when all 20 questions are complete (award badge at this point)
*/

SampleFunction=(item)=>{

  Alert.alert(item);
}

function LessonScreen(props) {

  var array = ["dobe", "dobe", "dode", "doke"];

  return (
    <View>
      <Text>Lesson Simulation</Text>

       { array.map((item, key)=>(
         <Text key={key} style={styles.TextStyle} onPress={ SampleFunction.bind(this, item) }> { item } </Text>)
      )}

      <Button
        title="Click here to finish lesson (go back to home screen)"
        onPress={() => {
          alertBadgeAcquired(Constants.LESSON_COMPLETION_ID);
          props.navigation.navigate("Home");
          props.badgeUpdate.updateBadgeState(
            Constants.LESSON_COMPLETION,
            Constants.LESSON_COMPLETION_1
          );
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({

 MainContainer: {
   flex: 1,
   margin: 10
 },

 TextStyle:{
   fontSize : 25,
    textAlign: 'center'
 }
 
});

export default LessonScreen;
