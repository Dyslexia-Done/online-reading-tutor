import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView, Dimensions, Button} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class CarouselCards extends React.Component  {

 
    constructor(props){
        super(props);
        this.goToFire = this.goToFire.bind(this);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Fire World",
              text: "0/10",
          index: 1,

          },
          {
              title:"Ice World",
              text: "0/10",
              index: 2,

          },
          {
              title:"Jungle World",
              text: "0/10",
              index: 3,

          },
          {
              title:"Alien World",
              text: "0/10",
              index: 4,

          },

        ]
      }
    }

    _renderItem({item,index}){
//        const { navigate } = this.props.navigation.navigate(Game);

        return (
          <View style={{
              backgroundColor:'rebeccapurple',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25,
              marginTop:  Dimensions.get('window').height/4,
        }}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
            
                <Button title = "Click to Play Fire World" onPress= {() =>  this.goToFire()} />
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                

            </View>
          </SafeAreaView>
        );
    }
    goToFire = () => {
      this.props.navigation.navigate('Game')
      this.setState({
        showModal: false
      });
      }
}


