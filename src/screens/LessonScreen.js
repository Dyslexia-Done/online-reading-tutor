import * as React from "react";
import Constants from "../components/Constants.js";
import { StyleSheet, Text, View, Button, Alert, ScrollView, TouchableOpacity } from "react-native";
import { alertBadgeAcquired } from "../components/BadgeHelpers";
import Sound from "react-native-sound";
/*TODO:

1. Use better data structure for question and answers 
2. Clear previous questiona and load next question on the screen after an answer is selected
3. Play sound file for word when question is clicked
4. keep track of when all 20 questions are complete (award badge at this point)
*/


  showArrayItem = (item) => {

    Alert.alert(item);

  }


sound = new Sound ('./dobe.wav');
PlaySound=(item)=>{
   this.sound.play();

  Alert.alert(item);
}

ClearScreen=(item)=>{

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

  return (
       <View style={styles.MainContainer}>
        <ScrollView>
          {
            this.q_and_a.map((item, key) => (
              <TouchableOpacity>

                <Text style={styles.TextStyle} onPress={PlaySound.bind(this, item.question)} >  {item.question} </Text>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.TextStyle} onPress={ ClearScreen.bind(this, item.answer[0]) } >  {item.answer[0]} </Text>
                <Text style={styles.TextStyle} onPress={ ClearScreen.bind(this, item.answer[1]) } >  {item.answer[1]} </Text>
                <Text style={styles.TextStyle} onPress={ ClearScreen.bind(this, item.answer[2]) } >  {item.answer[2]} </Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
            
          } 
        </ScrollView>

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
