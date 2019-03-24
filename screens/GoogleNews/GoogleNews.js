import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import { Font } from 'expo';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import FadeInView from './FadeInView';

class GoogleNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsData: [],
            urlIndex: 0,
            newsIndex: 0,
            animateStartValue: 0,
            animateEndValue: 0
        }
    }

    componentDidMount() {
        Font.loadAsync({
            'chivo-bold': require('../../assets/fonts/Chivo-Bold.ttf'),
        });
        this.fetchNews();
    }

    fetchNews = () => {
        //'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fd94682fa1b24ff5b9316a250c504b17'
        const url =
            ['https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=fd94682fa1b24ff5b9316a250c504b17'
                , 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd94682fa1b24ff5b9316a250c504b17'
            ];
        this.setState({ newsData: [] });
        fetch(url[this.state.urlIndex])
            .then(res => res.json())
            .then(res => {
                const { urlIndex } = this.state;
                this.setState({
                    newsData: res.articles,
                    urlIndex: (url.length - 1) === urlIndex ? 0 : urlIndex + 1
                });
                //this.createNewsBlock();
            })
            .catch(error => {
                alert('errorr occure' + error);
            });
    }

    FetchingNews = () => {
        this.setState({
            newsIndex: 0
        })
        this.fetchNews(); // Fetch new data when End of first News Provider
    }


    onSwipeUp = (gestureState) => {
        this.setState({
            newsIndex: this.state.newsIndex + 1,
            animateStartValue: 200,

            animateEndValue: 1
        })
    }

    onSwipeDown = (gestureState) => {
        this.setState({
            newsIndex: this.state.newsIndex - 1,
            animateStartValue: -200,
            animateEndValue: 1
        })
    }

    render() {
        const { newsData, animateEndValue, animateStartValue, newsIndex } = this.state;
        let content =
            <View>
                <ActivityIndicator animating size="large" />
            </View>;
     
        if (newsIndex <= -1 || (newsIndex >= newsData.length) && newsData.length > 0) {
            content =
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.FetchingNews}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>No More News Available! Click to show from start</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        } else if (newsData.length > 0) {
            content =
                <View style={styles.container}>
                    <FadeInView
                        fadeAnim={new Animated.Value(animateStartValue)}
                        end={animateEndValue} >
                        <GestureRecognizer
                            onSwipeUp={(state) => this.onSwipeUp(state)}
                            onSwipeDown={(state) => this.onSwipeDown(state)}
                        >
                            {/* <TouchableOpacity onPress={this._onPressContainer}> */}
                            <View style={{ flex: 1 }}>

                                <View style={styles.titleView}>
                                    <Text style={styles.titleText}>
                                        {newsData[newsIndex].title}
                                    </Text>
                                </View>
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: '100%', height: 200 }}
                                    defaultSource={require('../../assets/loader.gif')}
                                    key={newsData[newsIndex].urlToImage}
                                    //defaultSource ='https://uae.microless.com/cdn/no_image.jpg'
                                    source={{ uri: newsData[newsIndex].urlToImage === null ? 'https://uae.microless.com/cdn/no_image.jpg' : newsData[newsIndex].urlToImage.replace('"', '').replace('"', '') }}
                                />
                                <View style={styles.descView}>
                                    <Text style={styles.descText}>
                                        {newsData[newsIndex].content}
                                    </Text>
                                </View>
                                {/* <FadeInView fadeAnim= {new Animated.Value(0)}>
                                <Text> {this.state.newsData[this.state.newsIndex].content} </Text>
                            </FadeInView> */}
                            </View>
                            {/* </TouchableOpacity> */}
                        </GestureRecognizer>
                    </FadeInView>
                </View>
        }

        return content
    }
}

export default GoogleNews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7f2e6',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    titleView: {
        padding: 5,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    descView: {
        width: '100%',
        paddingHorizontal: 5
    },
    titleText: {
        fontFamily: 'chivo-bold',
        fontSize: 34
    },
    descText: {
        fontSize: 22
    }

});