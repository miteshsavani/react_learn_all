import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,

} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import FoodGrid from '../../src/components/Foods/FoodGrid';

const WINDOW_WIDTH = Dimensions.get('window').width;
const FoodImageURLs = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG/1200px-Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG',
  'http://mchalescatering.com/sites/default/files/5starplatedsm.jpg',
  'http://images.media-allrecipes.com/userphotos/960x960/3757965.jpg',
  'https://omunicipio.com.br/wp-content/uploads/2017/10/dieta-low-carb-1.jpeg',
  'http://www.pasqualesrest.com/wp-content/uploads/2015/01/italian-6.jpg'
];

const Dessets = [
  'https://images.pexels.com/photos/461302/pexels-photo-461302.jpeg',
  'http://3j9zkg3nh90i17uvfo2fco4v.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/Quick-American-Style-Pancakes.jpg',
  'http://blissfullydomestic.com/wp-content/uploads/2014/06/maple-bacon-cupcakes-syrup.jpg',
  'http://3j9zkg3nh90i17uvfo2fco4v.wpengine.netdna-cdn.com/wp-content/uploads/2017/01/Gluten-Free-Pancakes.jpg',
  'https://img.taste.com.au/rI_yFqAp/taste/2016/11/raspberry-honey-dessert-cake-92136-1.jpeg',
  'http://www.sonomamag.com/biteclub/wp-content/uploads/2010/12/desserts.jpg'
];

const FoodData1 = [
  { 
    foodUrl:'http://www.sonomamag.com/biteclub/wp-content/uploads/2010/12/desserts.jpg',
    foodName: 'Chicken',
    foodDesc: 'Healthy food',
    foodPrice: 580
  },
  { 
    foodUrl: 'http://3j9zkg3nh90i17uvfo2fco4v.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/Quick-American-Style-Pancakes.jpg',
    foodName: 'Chicken',
    foodDesc: 'Healthy food',
    foodPrice: 3902
  },
  { 
    foodUrl: 'http://blissfullydomestic.com/wp-content/uploads/2014/06/maple-bacon-cupcakes-syrup.jpg',
    foodName: 'Chicken',
    foodDesc: 'Healthy food',
    foodPrice: 302
  }
];

const FoodData2 = [
  { 
    foodUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG/1200px-Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG',
    foodName: 'dfasdfsafd',
    foodDesc: 'Healthy food',
    foodPrice: 580
  },
];

class ListofFoods extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FoodGrid Foods={{ foods: FoodData1 }} />
          <FoodGrid Foods={{ foods: FoodData1 }} />
          <FoodGrid Foods={{ foods: FoodData1 }} />
          <FoodGrid Foods={{ foods: FoodData1 }} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}


export default ListofFoods;
