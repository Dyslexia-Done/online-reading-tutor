import * as React from "react";
import {
  Modal, View, StyleSheet, Animated, Dimensions, PanResponder
} from "react-native";


// internal components
import { StartButton } from "./StartButton";


// import styles
import variables from "../styles/variables";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: variables.palette.gray.uiBackground,
    paddingTop: 12,
    paddingRight: 20,
    paddingLeft: 20,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    width: "100%"
  }
});

export class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
    // drawer top
    this.drawerTop = SCREEN_HEIGHT - props.height;

    this.state = {
      panY: new Animated.Value(SCREEN_HEIGHT)
    };
    this.resetPositionAnim = Animated.timing(this.state.panY, {
      toValue: this.drawerTop,
      duration: 800
    });

    this.closeAnim = Animated.timing(this.state.panY, {
      toValue: SCREEN_HEIGHT,
      duration: 1000
    });


    this.panResponders = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      // refactor this
      onPanResponderMove: (e, gs) => { },
      onPanResponderRelease: (e, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return this.closeAnim.start(() => this.props.onDismiss());
        }
        return this.resetPositionAnim.start();
      }
    });
  }


  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.visible !== this.props.visible
      && this.props.visible
    ) {
      this.resetPositionAnim.start();
    }
  }

  render() {
    const top = this.state.panY.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 0, 1]
    });
    const { children, visible, height } = this.props;
    return (
      <Modal
        animated
        animationType="slide"
        visible={visible}
        transparent
      >
        <Animated.View style={[styles.container, { height, top }]} {...this.panResponders.panHandlers}>
          <View>{children}</View>
          <StartButton text="Done" onPress={() => this.props.onDismiss()} />
        </Animated.View>
      </Modal>
    );
  }
}
