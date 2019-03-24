import React, {Component} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Button
} from 'react-native';


class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={()=>this.props.navigation.navigate('SignIn')} title='Sign In' />
        <Button onPress={()=>this.props.navigation.navigate('SignUp')} title ='Sign Up' />
      </View>
    )
  }
}


export default WelcomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });