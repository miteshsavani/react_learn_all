import React, {Component} from 'react';
import {   AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
 } from 'react-native';

import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

const renderCarousel = () => (
  <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      source={{ uri: 'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg' }}
    />
    <View style={{ backgroundColor: '#6C7A89', flex: 1, justifyContent:'center',alignItems:'center' }}> 
      <Text style={{color:'#fff',fontSize:24}}>Mitesh</Text>
    </View>
    <View style={{ backgroundColor: '#019875', flex: 1 }}>
    <Text>Anil</Text>
    </View>
    <View style={{ backgroundColor: '#E67E22', flex: 1 }}/>
  </Carousel>
)


class SignUpScreen extends Component {

  

  render() {
    return (
      <ScrollView style={styles.container}>
    <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
    <Lightbox underlayColor="white">
      <Image
        style={styles.contain}
        resizeMode="contain"
        source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
      />
    </Lightbox>
    <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
    <Lightbox springConfig={{tension: 10000, friction:10000}} swipeToDismiss={false} renderContent={renderCarousel}>
      <Image
        style={styles.carousel}
        resizeMode="contain"
        source={{ uri: 'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg' }}
      />
    </Lightbox>
    <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
    <Lightbox
      renderHeader={close => (
        <TouchableOpacity onPress={close}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      )}>
      <View style={styles.customHeaderBox}>
        <Text>I have a custom header</Text>
      </View>
    </Lightbox>
    <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
    <View style={styles.row}>
      <Lightbox style={styles.col}>
        <View style={[styles.square, styles.squareFirst]}><Text style={styles.squareText}>I'm a square</Text></View>
      </Lightbox>
      <Lightbox style={styles.col}>
        <View style={[styles.square, styles.squareSecond]}><Text style={styles.squareText}>I'm a square</Text></View>
      </Lightbox>
    </View>
    <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
  </ScrollView>
    )
  }
}


export default SignUpScreen;


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
  customHeaderBox: {
    height: 150,
    backgroundColor: '#6C7A89',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginLeft: -10,
    marginRight: -10,
  },
  col: {
    flex: 1,
  },
  square: {
    width: 320 / 2,
    height: 320 / 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  squareFirst: {
    backgroundColor: '#C0392B',
  },
  squareSecond: {
    backgroundColor: '#019875',
  },
  squareText: {
    textAlign: 'center',
    color: 'white',
  },
  carousel: {
    height: 320 - 10 * 2,
    width: 320 - 10 * 2,
    backgroundColor: 'white',
  },
  contain: {
    flex: 1,
    height: 150,
  },
  text: {
    marginVertical: 20,
  },
  });