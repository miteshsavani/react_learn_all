import React from 'react';
import { StyleSheet, Text, View,
  TouchableOpacity
} from 'react-native';
import { 
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'

import  WelcomeScreen from './screens/WelcomeScreen';
import  AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/Home/HomeScreen';
import SettingScreen from './screens/Settings/SettingScreen';
import NewsScreen from './screens/News/NewsScreen';
import NewsDetailsScreen from './screens/News/NewsDetailsScreen';
import FoodItems from './screens/Food/FoodItems';
import GoogleNews from './screens/GoogleNews/GoogleNews';

const TabNavigationOptions = (name) =>{
  return ({
    title: name,
    tabBarIcon: ({tintColor}) => (
      <View style={{paddingHorizontal: 10}}>
          <Icon name='md-settings' color={tintColor} size={24} />
        </View>
    )
  })
}

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Home`,
      tabBarIcon: ({tintColor}) => (
        <View style={{paddingHorizontal: 10}}>
            <Icon name='md-home' color={tintColor} size={24} />
          </View>
      )
    })
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: TabNavigationOptions('Settings')
  }
},{
  tabBarOptions: {
    activeTintColor: '#3f4cff',
    labelStyle: {
      fontSize: 18,
    }
  }
})

const SecondAppTabNavigator = createStackNavigator({
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: ({navigation}) =>({
      title:'News',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-arrow-round-back' size={24} />
          </View>
        </TouchableOpacity>
      )

    })
  },
  NewsDetailsScreen: {
    screen: NewsDetailsScreen
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions:({navigation}) => ({
      title:'Mitesh',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const FoodStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: FoodItems,
    navigationOptions:({navigation}) => ({
      title:'Food for You',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const GoogleNews_StackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: GoogleNews,
    navigationOptions:({navigation}) => ({
      title:'Google News',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const SecondAppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:SecondAppTabNavigator
  }
})


const AppDrawNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
  DailyNews: SecondAppTabNavigator,
  Food: FoodStackNavigator,
  GoogleNews: GoogleNews_StackNavigator
},{
  initialRouteName:'GoogleNews'
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
