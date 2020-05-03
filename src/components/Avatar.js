import * as React from "react";
import {
    Platform, StyleSheet, Text, View, Dimensions, Image,TouchableOpacity, ImageBackground
} from "react-native";

// internal components
import { Button, BottomSheet } from "../components/index";


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
     underline: {textDecorationLine: 'underline'},
    bodyPart: {
        width: 100,
        height: 100,
        marginTop:20,
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
       },
    tabText: {
        fontSize: 25,
        color: "#333333"
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
       this.setState({showImage: true});
        this.setState({showEyeImage: false});
        this.setState({showMouthImage: false});


    }
    showEyeImageFunc = () => {
       this.setState({showEyeImage: true});
        this.setState({showImage: false});
        this.setState({showMouthImage: false});


    }
    showMouthImageFunc = () => {
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
          this.setState({topImageFinal: topImage});
        this.setState({midImageFinal: midImage});
        this.setState({bottomImageFinal: bottomImage});

    }
  render() {
    const { editMode } = this.state;
      const modalHeight = 2 * (Dimensions.get("screen").height * 0.25);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Reading Tutor!</Text>
        <Text style={styles.instructions}>To get started, click here!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <ImageBackground
            style={styles.profilePic}
            source={require('../assets/avatar/body.png')}>
        <Image
            style={styles.profileBodyParts}
            source={require('../assets/avatar/mid/cyclops.png')} />
            <Image
            style={styles.bodyPart}
                      source={require('../assets/avatar/bottom/toothy.png')} />
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
          text="click here to edit your avatar"
          onPress={() => this.toggleEditState()}
        />
            
        <BottomSheet onDismiss={() => this.toggleEditState()} visible={editMode} height={modalHeight}>
    
            
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={()=>this.showImageFunc()}>
            <Text style={styles.tabText}>Hair</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.showEyeImageFunc()}>
            <Text style={styles.tabText}>Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.showMouthImageFunc()}>
            <Text style={styles.tabText}>Mouth</Text>
          </TouchableOpacity>
        </View>
            
        <View style={styles.imageTabContainer}>

                {this.state.showImage &&
                      <View>
                        <TouchableOpacity onPress={()=>this.selectTopImage("1")}>
                        <Image
                style={styles.bodyPart}
                          source={require('../assets/avatar/top/brain.png')} />
                        </TouchableOpacity>

                    </View>}
            
            {this.state.showImage &&
              <View>
                <TouchableOpacity onPress={()=>this.selectTopImage("2")}>
                <Image
            style={styles.bodyPart}
                  source={require('../assets/avatar/top/hair.png')} />
                </TouchableOpacity>

              </View>}
                

                {this.state.showEyeImage &&
                      <View>
                    <TouchableOpacity onPress={()=>this.selectMidImage("1")}>

                        <Image
                style={styles.bodyPart}
                          source={require('../assets/avatar/mid/cyclops.png')} />
                    </TouchableOpacity>

                      </View>}
                       {this.state.showEyeImage &&
                             <View>
                           <TouchableOpacity onPress={()=>this.selectMidImage("2")}>

                               <Image
                       style={styles.bodyPart}
                                 source={require('../assets/avatar/mid/goofy.png')} />
                           </TouchableOpacity>

                             </View>}
                   
                   {this.state.showEyeImage &&
                     <View>
                       <TouchableOpacity onPress={()=>this.selectMidImage("3")}>
                       <Image
                   style={styles.bodyPart}
                         source={require('../assets/avatar/mid/scared.png')} />
                       </TouchableOpacity>

                     </View>}
                       
  

                 {this.state.showMouthImage &&
                                <View>
                     <TouchableOpacity onPress={()=>this.selectBottomImage("1")}>

                                  <Image
                          style={styles.bodyPart}
                                    source={require('../assets/avatar/bottom/toothy.png')} />
                     </TouchableOpacity>

                                </View>}
                      
               {this.state.showMouthImage &&
                        <View>
                   <TouchableOpacity onPress={()=>this.selectBottomImage("2")}>

                          <Image
                   style={styles.bodyPart}
                            source={require('../assets/avatar/bottom/vamp.png')} />
                   </TouchableOpacity>

                        </View>}
        </View>
                        
            <Button
              text="Save"
              onPress={() => this.toggleEditState()}
            />
        </BottomSheet>
      </View>
    );
  }
}


export default HomeScreen;
