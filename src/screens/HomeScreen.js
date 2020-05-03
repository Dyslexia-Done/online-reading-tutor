import * as React from "react";
import {
    Platform, StyleSheet, Text, View, Dimensions, Image,TouchableOpacity, ImageBackground
} from "react-native";

// internal components
import { Button, BottomSheet } from "../components/index";
import globalStyles from "../styles/global";
import Constants from "../components/Constants.js";




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
  },
  tabContainer: {
    backgroundColor: variables.palette.gray.uiBackground,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: "100%",
    alignItems: "center",
    marginTop: 10,
    height: 40,
    flexWrap: "wrap",
    marginBottom: 20
  },
  imageTabContainer: {
    backgroundColor: variables.palette.gray.uiBackground,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: "100%",
    alignItems: "center",
    marginTop: 10,
    height: 40,
    flexWrap: "wrap",
    marginBottom: 100,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  bottomBodyPart: {
    marginTop:20,
    marginRight: 50,
    marginLeft:5
  },
  profileBodyPartTop: {
    marginTop:20,
    marginRight: 50,
    marginLeft:5,
    marginBottom:50
  },
  topBodyPart: {
    height:75,
    width:100,
    marginRight: 25,
    marginLeft:25
  },
  profilePic: {
    width: 150,
    height: 300,
    marginTop:20,
    marginRight: 25,
    marginLeft:25
  },
  profileBodyParts: {
    width: 60,
    height: 60,
    marginTop:80,
    marginRight: 50,
    marginLeft:45,
  }
});


class HomeScreen extends React.Component {
  constructor(props) {
    super();
    this.showImageFunc = this.showImageFunc.bind(this);
    this.showEyeImageFunc = this.showEyeImageFunc.bind(this);
    this.showMouthImageFunc = this.showMouthImageFunc.bind(this);
    this.selectTopImage = this.selectTopImage.bind(this);
    this.state = {
      editMode: false,
      showImage: false,
      showEyeImage: false,
      showMouthImage: false,
      topImage: 0,
      midImage:0,
      bottomImage:0,
      topImageFinal: 0,
      midImageFinal:0,
      bottomImageFinal:0,
      hair : null,
      eyes : null,
      mouth : null,
      hairTextColour : "#333333",
      eyeTextColour: "#333333",
      mouthTextColour: "#333333",
      Top : [
        {
          "image": Constants.TOP_BRAIN
        },
        {
          "image": Constants.TOP_HAIR
        }
     ],
    Mid : [
        {
          "image": Constants.MID_CYCLOPS
        },
        {
          "image": Constants.MID_GOOFY
        },
        {
          "image": Constants.MID_SCARED
        }
     ],
     Bottom : [
        {
           "image": Constants.BOT_TOOTHY
        },
        {
           "image": Constants.BOT_VAMP
        }
     ]
        
    };
      
  }

  toggleEditState() {
    this.setState((prevState) => {
      const newState = !prevState.editMode;
      return {
        editMode: newState,
        showImage:false,
        showEyeImage: false,
        showMouthImage: false
          
      };
    });
  }
    
  showImageFunc = () => {
      this.setState({hair:"underline",eye:null,mouth:null,hairTextColour:"white", eyeTextColour: "#333333", mouthTextColour:  "#333333"});
      this.setState({showImage: true});
      this.setState({showEyeImage: false});
      this.setState({showMouthImage: false});
  }
  showEyeImageFunc = () => {
      this.setState({hair:null,eye:"underline",mouth:null,eyeTextColour:"white", hairTextColour:  "#333333", mouthTextColour:  "#333333"});
      this.setState({showEyeImage: true});
      this.setState({showImage: false});
      this.setState({showMouthImage: false});
      
  }
  showMouthImageFunc = () => {
      this.setState({hair:null,eye:null,mouth:"underline",mouthTextColour:"white",hairTextColour: "#333333",eyeTextColour:  "#333333"});
      this.setState({showMouthImage: true});
      this.setState({showEyeImage: false});
      this.setState({showImage: false});
  }
  selectTopImage = (index) => {
      this.setState({topImage: index});
  }
  selectMidImage = (index) => {
      this.setState({midImage: index});
  }
  selectBottomImage = (index) => {
      this.setState({bottomImage: index});
  }
    
  displayAvatar = () => {
      this.setState({hair:null,eye:null,mouth:null,hairTextColour: "#333333", eyeTextColour: "#333333", mouthTextColour:  "#333333"});
      this.setState({topImageFinal: this.state.topImage});
      this.setState({midImageFinal: this.state.midImage});
      this.setState({bottomImageFinal: this.state.bottomImage});
      this.toggleEditState();
  }
  cancelSave = () => {
      this.setState({hair:null,eye:null,mouth:null,hairTextColour: "#333333", eyeTextColour: "#333333", mouthTextColour:  "#333333"});
      this.setState({topImage: this.state.topImageFinal});
      this.setState({midImage: this.state.midImageFinal});
      this.setState({bottomImage: this.state.bottomImageFinal});
      this.toggleEditState();
  }
  render() {
    const { editMode } = this.state;
    const modalHeight = 2 * (Dimensions.get("screen").height * 0.25);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Reading Tutor!</Text>
        <ImageBackground
            style={styles.profilePic}
            source={require('../assets/avatar/body.png')}>
            <Image source = {this.state.Top[this.state.topImageFinal].image}/>
            <Image source = {this.state.Mid[this.state.midImageFinal].image}/>
            <Image source = {this.state.Bottom[this.state.bottomImageFinal].image}/>
        </ImageBackground>
        <Button
          text="Click here to go to the Lessons page"
          onPress={() => this.props.navigation.navigate("Lessons")}
        />
        <Button
          text="Badges"
          onPress={() => this.props.navigation.navigate("Badges")}
        />
        <Button
          text="Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <Button
          text="click here to edit your avatar"
          onPress={() => this.toggleEditState()}
        />
            
        <BottomSheet onDismiss={() => this.toggleEditState()} visible={editMode} height={modalHeight}>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={()=>this.showImageFunc()}>
              <Text style={{ fontSize: 25, color:this.state.hairTextColour, textDecorationLine: this.state.hair }}>Hair</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.showEyeImageFunc()}>
              <Text style={{ fontSize: 25, color:this.state.eyeTextColour, textDecorationLine: this.state.eye }}>Eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.showMouthImageFunc()}>
              <Text style={{ fontSize: 25, color:this.state.mouthTextColour, textDecorationLine: this.state.mouth }}>Mouth</Text>
            </TouchableOpacity>
          </View>
            
          <View style={styles.imageTabContainer}>
            {this.state.showImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectTopImage(0)}>
                  <Image style={styles.topBodyPart}
                  source={Constants.TOP_BRAIN} />
                </TouchableOpacity>
              </View>}
            
            {this.state.showImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectTopImage(1)}>
                  <Image style={styles.topBodyPart}
                    source={Constants.TOP_HAIR} />
                </TouchableOpacity>
              </View>}
                
            {this.state.showEyeImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectMidImage(0)}>
                  <Image
                source={Constants.MID_CYCLOPS} />
                </TouchableOpacity>
              </View>}
            
            {this.state.showEyeImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectMidImage(1)}>
                  <Image
                source={Constants.MID_GOOFY} />
                </TouchableOpacity>
              </View>}
                   
            {this.state.showEyeImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectMidImage(2)}>
                  <Image
                source={Constants.MID_SCARED} />
                </TouchableOpacity>
              </View>}
  
            {this.state.showMouthImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectBottomImage(0)}>
                  <Image style={styles.bottomBodyPart}
                source={Constants.BOT_TOOTHY} />
                </TouchableOpacity>

              </View>}
                      
            {this.state.showMouthImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectBottomImage(1)}>
                  <Image style={styles.bottomBodyPart}
                source={Constants.BOT_VAMP} />
                </TouchableOpacity>
              </View>}
                   
          </View>
          <View>
          <Button
            text="Save"
            onPress={() => this.displayAvatar()}
          />
          <Button
            text="Cancel"
            onPress={() => this.cancelSave()}
          />
                
          </View>
        </BottomSheet>
      </View>
    );
  }
}


export default HomeScreen;
