import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import ImageComponent from '../../src/components/Image/imageComponent';
import styles from './home.styles';


class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      searchString: '',
      showLoader: false
    }
  }

  fetchImage = (query) => {
    this.setState({ showLoader: true });
    const url = 'https://pixabay.com/api/?key=10075220-993d9e3620d4ce127f61a87a8&q=' + encodeURI(query) + '&image_type=photo';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          images: response.hits,
          showLoader: false
        })
      });
  }


  searchBarComponent = () => {
    return (
      <View style={styles.searchView}>
        <TextInput
          onChangeText={(searchString) => this.setState({ searchString })}
          value={this.state.searchString}
          placeholder='eg. yellow'
          returnKeyType="go"
          onSubmitEditing={() => this.fetchImage(this.state.searchString)}
          style={styles.searchBar}
        />
        <TouchableOpacity onPress={() => this.fetchImage(this.state.searchString)}>
          <View style={styles.searchIconView}>
            <Ionicons name="md-add" size={30} style={styles.searchIcon} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  imageListComponent = () => {
    let renderOnScreen =
      (<View>
        <ActivityIndicator animating size="large" />
      </View>);

    if (!this.state.showLoader) {
      if (this.state.images.length == 0) {
        renderOnScreen =
          (
            <View>
              <Text> No Data Found!</Text>
            </View>
          )
      } else {
        renderOnScreen =
          (<ScrollView>
            <View style={styles.imageListView}>
              {
                this.state.images.map(image =>
                  <ImageComponent key={image.id} image={image} />
                )
              }
            </View>
          </ScrollView>);
      }

    }
    return renderOnScreen;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.searchBarComponent()}
        {this.imageListComponent()}
      </View>
    )
  }
}


export default HomeScreen;

