import React, {Component} from 'react';
import {
 View, 
 Text, 
 StyleSheet,
 ImageBackground,
 
 } from 'react-native';
 import { SafeAreaView } from 'react-navigation';

class ImageDetails extends Component {
  render(){
 const { navigation } = this.props;
 const url = navigation.getParam('url','blank');
    return (
  

      <View style={styles.container}>
               <ImageBackground source={{uri:url}} style={{ width: '100%', height: '100%' }}>
                <View style={{flex:1, alignItems:'center',justifyContent:'flex-end', margin:10}} >
                <View style={{
                
                    width:'100%',
                    paddingHorizontal:20,
                    paddingTop:30,
                    height:250,
                    borderColor:'black',
                    padding:40,
                    borderWidth:2,
                    backgroundColor:'white',
                    paddingBottom:30,
                    borderRadius:10,
                    
                }}>
                <Text> Dessets 
                
                </Text>
                </View>
                </View>
                </ImageBackground>
      </View>
  
    )
  }
}


export default ImageDetails;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });