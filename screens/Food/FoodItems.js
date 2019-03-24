import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground,
    StatusBar,
} from 'react-native';

import ListofFoods from './ListofFoods';

class FoodItems extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListofFoods />
            </View>
        )
    }
}

export default FoodItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        paddingLeft: 8,
        paddingBottom:8,
        paddingTop: 5
    },
});