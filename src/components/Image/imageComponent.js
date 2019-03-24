import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Lightbox from 'react-native-lightbox';
import styles from './styles.imageComponent';

class ImageComponent extends Component {

  imageDetails = (imageData) => {

    const { webformatURL, user, downloads } = imageData;
    return (<View>
      <Image source={{ uri: webformatURL }}
        style={styles.imageFullView}
        defaultSource={require('../../../assets/loader.gif')}
      />
      <View
        style={styles.imageDetails}>
        <Text style={{ fontSize: 16, color: '#000' }} >
          User:{user}
        </Text>
        <Text style={{ fontSize: 16, color: '#5e5f60' }} >
          Downloads:{downloads}
        </Text>

      </View>
    </View>)

  }

  render() {
    const { webformatURL, user, downloads } = this.props.image;
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', borderRadius: 10, overflow: 'hidden' }}>
          <Lightbox springConfig={{ tension: 50000, friction: 50000 }} renderContent={() => this.imageDetails(this.props.image)}>
            <Image source={{ uri: webformatURL }}
              style={styles.listImage}
              defaultSource={require('../../../assets/loader.gif')}
            />
          </Lightbox>
        </View>
      </View>
    )
  }
}


export default ImageComponent;