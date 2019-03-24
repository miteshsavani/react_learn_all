import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class NewsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
  }
}

  componentDidMount(){
    this.makeRemoteRequest();
  }

  makeRemoteRequest = ()=>{
    const url ='https://newsapi.org/v2/everything?q=bitcoin&apiKey=fd94682fa1b24ff5b9316a250c504b17';
    fetch(url)
      .then(res=>res.json())
      .then(res=>{
        //alert(res);
        this.setState({
          data:  res.articles
        });
      })
      .catch(error =>{
        alert('errorr occure' + error);
      });
  }

  render() {

    return (
      this.state.data.length > 0 ? (
      
      <List containerStyle={{marginBottom: 0, marginTop:0}}>
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={`${item.title}`}
            titleStyle={{fontSize:20,paddingLeft:10}}
            subtitleStyle = {{fontSize:16,paddingLeft:10}}
            containerStyle = {{marginTop:10,height:80,justifyContent:'center',paddingLeft:5}}
            subtitleNumberOfLines = {2}
            roundAvatar
            avatarStyle = {{width:60, height:60,borderRadius:30}}
            style={{ flex: 0.3}}
            subtitle={item.description}
            avatar={{ uri: item.urlToImage|| 'http://gammasphere.net/web/wp-content/plugins/penci-portfolio//images/no-thumbnail.jpg' }}
            onPress = 
            {() => this.props.navigation.navigate('NewsDetailsScreen',
                    {
                      title:item.title, 
                      desc:item.description,
                      url: item.urlToImage|| 'http://gammasphere.net/web/wp-content/plugins/penci-portfolio//images/no-thumbnail.jpg'
                    }
            )}

          />
        )}
        keyExtractor={item => item.url}
      />
    </List>
    )
    :
    (
      <View>
        <ActivityIndicator animating size="large" />
      </View>
    )
    )
  }
}


export default NewsScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });