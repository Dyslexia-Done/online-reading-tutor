import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import Profile from "../components/Profile";

const ProfileScreen = (props) => {
    return (
      <View style={styles.container}>
  
        <Profile badges={props.badges} />
      </View>
    );
  };
  export default ProfileScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    title: {
      marginTop: 15,
      fontSize: 25,
      color: variables.palette.purple.primary,
      fontWeight: "bold",
      marginLeft: 15,
      marginBottom: 30
    },
    subtitle: {
      margin: 20,
      fontSize: 15,
    },
  });
  
  