import * as React from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, Button, ImageBackground } from "react-native";

// local components
import { StartButton } from "./index";
import variables from "../styles/variables";

import {
    renderWorldBadges,
} from "../components/Helpers.js";
import { render } from "react-dom";

export default class Profile extends React.Component {
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
              "image": require("../assets/avatar/top/brain.png")
            },
            {
              "image": require("../assets/avatar/top/hair.png")
            }
         ],
        Mid : [
            {
                "image": require('../assets/avatar/mid/cyclops.png')
            },
            {
                "image": require('../assets/avatar/mid/goofy.png')
            },
            {
                "image": require('../assets/avatar/mid/scared.png')
            }
         ],
         Bottom : [
            {
                "image": require("../assets/avatar/bottom/toothy.png")
            },
            {
                "image": require("../assets/avatar/bottom/vamp.png")
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

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <View style={styles.profileContainer}>
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
                        </View>
                        <View style={styles.editbutton}>
                            <Button title="" onPress={() => this.editAvatar()} />
                        </View>
                    </View>
                    <Text style={styles.nameText}> John Doe </Text>
                    <View style={styles.streakdisplay}>
                        <View style={styles.streakContainer}>

                        </View>
                        <View style={styles.streakContainer}>

                        </View>
                    </View>
                </View>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}> Badges Earned </Text>
                    <ScrollView horizontal={true} style={styles.badgeContainer}>
                        <Image
                            source={require("../assets/badges/world_completion.png")}
                            style={styles.ImageIconStyle}
                        />
                        <Image
                            source={require("../assets/badges/world_completion.png")}
                            style={styles.ImageIconStyle}
                        />
                        <Image
                            source={require("../assets/badges/world_completion.png")}
                            style={styles.ImageIconStyle}
                        />
                        <Image
                            source={require("../assets/badges/world_completion.png")}
                            style={styles.ImageIconStyle}
                        />
                    </ScrollView>
                </View>
                <StartButton text="Start" onPress={() => this.goToFire()} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingBottom: 100,
    },

    topContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.palette.gray.light,
        height: "55%",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },

    imageContainer: {
        width: 180,
        height: 180,
        borderRadius: 100,
        backgroundColor: variables.palette.blue.primary,
        marginTop: 30,
        marginBottom: 10,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: "row-reverse",

    },

    profileContainer: {
        overflow: "hidden",
        width: 180,
        height: 180,
        borderRadius: 100,
        alignSelf: "center",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: 90,
        height: 156,
        marginTop: 60,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileBodyParts: {
        marginTop: 15,
        width: 70,
        height: 50,
        resizeMode: 'contain'
    },

    bodyPart: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },

    editbutton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: variables.palette.pink.primary,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },

    badgeText: {
        color: "white",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 15
    },

    badgeContainer: {
        height: 250,
    },

    streakdisplay: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 45
    },
    streakContainer: {
        backgroundColor: variables.palette.blue.primary,
        borderRadius: 50,
        width: "30%",
        height: 60,
        backgroundColor: "black",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        marginRight: 30,
        marginLeft: 30
    },
    button: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
    nameText: {
        color: "white",
        fontSize: 30,
        alignSelf: "center",
        padding: 10
    },
    ImageIconStyle: {
        width: 130,
        height: 150,
        margin: 15
    }
});