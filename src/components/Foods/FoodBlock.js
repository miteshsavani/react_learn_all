import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
class FoodBlock extends Component {
    render() {
        const {foodUrl, foodName, foodDesc, foodPrice} = this.props.food
        return (
            <View style={styles.container}>
                <View style={styles.foodImageView} >
                    <Image source={{ uri: foodUrl }} 
                        resizeMode='cover'
                        style={styles.foodImage} />
                </View>
                <View style={styles.foodInfoBlock}>
                    <Text style={styles.foodName}> 
                        {foodName} 
                    </Text>
                    <Text style={styles.foodDescription}> 
                        {foodDesc}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18 }}> 
                            {foodPrice}
                        </Text>
                        <Image 
                            source={require('../../../assets/vegetarian-food-symbol.png')} 
                            style={{ height: 20, width: 20 }} />
                    </View>
                </View>
            </View>
        )
    }
}


export default FoodBlock;


const styles = StyleSheet.create({
    container:{
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    width: WINDOW_WIDTH / 2 - 15,
    height: 250,
    //overflow:'hidden',
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    shadowOffset: { width: 4, height: 4, },
    shadowColor: '#e5e6e8',
    shadowOpacity: 4.0,
  },
    foodImageView: {
        overflow: 'hidden', 
        width: '100%', 
        borderTopEndRadius: 10, 
        borderTopLeftRadius: 10
    },
    foodImage:{ 
        width: '100%', 
        height: 180, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 100 
    },
    foodInfoBlock: {
        borderBottomLeftRadius: 10,
        width: '100%',
        height: 70,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#e5e6e8',
        paddingHorizontal: 5,
    },
    foodName: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginBottom: 5
    },
    foodDescription:{
        fontSize: 14, 
        marginBottom: 5
    }
});