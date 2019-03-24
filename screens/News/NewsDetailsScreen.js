import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


class NewsDetailsScreen extends Component {
  render() {
    const { navigation } = this.props;
    const newsTitle = navigation.getParam('title', 'NO-ID');
    const newsDesc = navigation.getParam('desc','NOT');
    const url = navigation.getParam('url','blank');
    const image = JSON.stringify(url).replace('"','').replace('"','');
    return (
      <View style ={styles.container}>
        <Text h3 style={{fontSize:22}}>{JSON.stringify(newsTitle).replace('"','').replace('"','')}</Text>
        <Image
          resizeMode={'cover'}
          style={{ width: '100%', height: 200 }}
          source = {{uri: image.replace('"','').replace('"','')}}
          />
        <Text>{JSON.stringify(newsDesc).replace('"','').replace('"','')}
          </Text>
      </View>
    )
  }
}

export default NewsDetailsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingHorizontal:10
    },
  });