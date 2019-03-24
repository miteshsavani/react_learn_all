import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';

import FoodBlock from './FoodBlock';

class FoodGrid extends Component {
    render() {
        const {foods} = this.props.Foods
        return (
            <View style={styles.grid}>
                <View style={{ marginTop: StatusBar.currentHeight }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Love for Dessert </Text>
                    <Text style={{ fontSize: 14, color: 'red', marginTop: 10 }}> Starting at @9 only </Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            foods.map((food) => 
                            <FoodBlock key={food.foodUrl} food={food} />)
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default FoodGrid;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid:{
        marginTop: 10,
        marginBottom: 10
    }
});