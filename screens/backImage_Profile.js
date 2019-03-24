import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground,
    StatusBar,
} from 'react-native';

import ImageCard from '../src/components/ImageCard';

class backImage_Profile extends Component {
    render() {
        return (
           /*  <View style={styles.container}>
                <ImageBackground source={require('./background1.png')} style={{ width: '100%', height: '50%' }} />
                <View style={{
                    position:'absolute',
                    width:'70%',
                    paddingHorizontal:20,
                    paddingTop:40,
                    height:150
                }}>
                </View>
            </View> */
            <ImageCard />

        )
    }
}


export default backImage_Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop:StatusBar.currentHeight,
        justifyContent: 'center',
    },
});