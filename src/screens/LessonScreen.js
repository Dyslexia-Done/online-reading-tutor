import * as React from "react";
import Constants from "../components/Constants.js";
import { StyleSheet, Text, View, Button, Alert, ScrollView, TouchableOpacity } from "react-native";
import { alertBadgeAcquired } from "../components/BadgeHelpers";
import { useState } from 'react';
/*TODO:

1. Use better data structure for question and answers 
2. Clear previous questiona and load next question on the screen after an answer is selected
3. Play sound file for word when question is clicked
4. keep track of when all 20 questions are complete (award badge at this point)
*/


PlaySound=(item)=>{


  Alert.alert(item);
}

function LessonScreen(props) {

  q_and_a = [

      { question: "dode", answer: ["dode", "dobe", "doke"]},
      { question: "jafe", answer: ["jase", "jafe", "jale"]},
      { question: "taje", answer: ["taje", "tade", "tabe"]},
      { question: "loce", answer: ["loze", "lote", "loce"]},
      { question: "bele", answer: ["bebe", "bele", "beke"]},
      { question: "jafe", answer: ["jase", "jafe", "jale"]},
      { question: "rike", answer: ["rike", "roke", "ruke"]},
      { question: "gake", answer: ["gace", "guke", "gake"]},
      { question: "pebe", answer: ["pabe", "pebe", "pibe"]},
      { question: "mupe", answer: ["mipe", "mupe", "mape"]}

    ];
  const [index, setIndex] = useState(0);
  const current = q_and_a[index];
  console.log(current);
  return (
      <View style={styles.MainContainer}>
       <Text style={styles.TextStyle} onPress={PlaySound.bind(this, current.question)} >{current.question}</Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.TextStyle} onPress={() => {
                                          if(current.answer[0]===current.question){
                                           setIndex(index + 1);
                                          } else {
                                            Alert.alert("Try again!");
                                          }
                                        }} 
                                        > {current.answer[0]} </Text>
          <Text style={styles.TextStyle} onPress={() => {
                                          if(current.answer[1]===current.question){
                                           setIndex(index + 1);
                                          } else {
                                            Alert.alert("Try again!");
                                          }
                                        }} 
                                        > {current.answer[1]} </Text>
          <Text style={styles.TextStyle} onPress={() => {
                                          if(current.answer[2]===current.question){
                                           setIndex(index + 1);
                                          } else {
                                            Alert.alert("Try again!");
                                          }
                                        }} 
                                        > {current.answer[2]} </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({

 MainContainer: {
   flex: 1,
   margin: 10
 },

 TextStyle:{
   fontSize : 30,
    textAlign: 'center'
 }
 
});

export default LessonScreen;
