import { StyleSheet, Dimensions } from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      width: WINDOW_WIDTH / 2 - 5,
      justifyContent: 'flex-start',
      paddingHorizontal: 10,
      marginBottom: 20
    },
    listImage: {
      width: '100%',
      height: 200
    },
    imageDetails: {
      backgroundColor: '#d7d8da',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      width: '100%',
      paddingTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10
    },
    imageFullView:{
      width: '100%', 
      height: 400  
    }
  });