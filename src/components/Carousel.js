import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';
// local components
import Constants from './Constants';
import WorldsConstants from './WorldsConstants'
import variables from '../styles/variables'

import { Button, BottomSheet } from "./index";
import * as DataObject from "./Database";
import { setCurrentLessonParentWorld } from "./Helpers";

export default class CarouselCards extends React.Component  {

    constructor(props){
        super(props);
        this.goToFire = this.goToFire.bind(this);
        this.state = {
          activeIndex:0,
          carouselItems: WorldsConstants.WORLDS,
          showModal: false,
      }
    }

    _renderItem({item,index}){
//        const { navigate } = this.props.navigation.navigate(Game);
        return (
          <View style={{
              backgroundColor: WorldsConstants.WORLDS_BG_COLOR,
              borderRadius: 5,
              height: Dimensions.get('window').height,
              // justifyContent: 'center',
              alignItems: 'center',

          }}>
              <View style={{
                  height: Dimensions.get('window').height *0.5,
                  marginTop:  Dimensions.get('window').height *0.10,
              }}>
                  <Image
                    key={item.title}
                    source={DataObject.Data.lesson_completion_per_world[item.short_key]["world_unlocked"] ? item.icon : this.state.carouselItems[3].icon}
                    style={{
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                  />
              </View>
              <View style={{
                alignItems: 'center',
                marginTop: 30,
                justifyContent: 'center',
                textAlignVertical: 'bottom'}}>
                <Text style={{
                  fontSize: 30,
                  color: 'white',
                }}>
                  {item.title}
                </Text>
                <Text style={{
                  color: 'white',
                }}>
                  {DataObject.Data.lesson_completion_per_world[item.short_key]["lessons_completed"] + "/" + Constants.TOTAL_LESSONS}
                </Text>
              </View>
              <View style={{ height: Dimensions.get('window').height *0.2}}>
                  <TouchableOpacity
                    style = {[styles.button,
                              DataObject.Data.lesson_completion_per_world[item.short_key]["world_unlocked"] ? styles.button_clickable : styles.button_unclickable]}
                    color="#65269c"
                    disabled={!DataObject.Data.lesson_completion_per_world[item.short_key]["world_unlocked"]}
                    onPress= {() =>  this.goToFire()}>
                      <Text style={{ color: 'white' }}>
                        {DataObject.Data.lesson_completion_per_world[item.short_key]["world_unlocked"] ? "Explore The "+ item.title : "World Locked"}
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
        );
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:WorldsConstants.WORLDS_BG_COLOR, paddingTop: 50, paddingBottom:100}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
              <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={400}
                itemWidth={200}
                renderItem={this._renderItem.bind(this)}
                onSnapToItem = { index => this.setState({activeIndex:index}) }
                removeClippedSubviews={false} />
            </View>
          </SafeAreaView>
        );
    }

    goToFire = () => {
      setCurrentLessonParentWorld(this.state.carouselItems[this.state.activeIndex].short_key);
      this.props.navigation.navigate('Game')
      this.setState({
        showModal: false
      });
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    marginTop: Dimensions.get('window').height * 0.03,
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 40,
    borderWidth: 1
  },
  button_clickable: {
    backgroundColor: variables.palette.blue.primary,
  },
  button_unclickable: {
    backgroundColor: '#888888',
  },
  visible: {
    opacity: 100
  },
  hidden: {
    opacity: 0
  }
});
