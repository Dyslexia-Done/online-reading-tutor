import * as React from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, Button, ImageBackground, Dimensions, TouchableOpacity } from "react-native";

// local components
import { BottomSheet } from "./index";
import variables from "../styles/variables";

import {
    renderWorldBadges,
} from "../components/Helpers.js";
import { render } from "react-dom";

export default class Profile extends React.Component {
    render() {
        //const { editMode } = this.state;
        //const modalHeight = 2 * (Dimensions.get("screen").height / 3);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <View style={styles.profileContainer}>
                            <ImageBackground
                                style={styles.profilePic}
                                source={require('../assets/avatar/body.png')}>
                                <Image style={styles.eyesBodyPart} source={require("../assets/avatar/mid/scared.png")} />
                                <Image style={styles.mouthbodyPart} source={require("../assets/avatar/bottom/vamp.png")} />
                            </ImageBackground>
                        </View>
                        <View style={styles.headContainer}>
                            <Image style={styles.headBodyPart} source={require("../assets/avatar/top/brain.png")} />
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

    headContainer: {
        overflow: "hidden",
        width: 180,
        height: 180,
        borderRadius: 100,
        alignSelf: "center",
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
    },
    profilePic: {
        width: 88,
        height: 150,
        marginTop: 60,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headBodyPart: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 10
    },

    eyesBodyPart: {
        marginTop: 30,
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },

    mouthbodyPart: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
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
    },
    tabContainer: {
        backgroundColor: variables.palette.gray.uiBackground,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        height: "600%",
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
});