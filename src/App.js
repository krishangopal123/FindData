import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer} from 'react-navigation';

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

// create our app's navigation stack

const RootStack = createSwitchNavigator({
  
    Splash: { screen: Loading },
    Auth: { screen: Login },
    Application: { screen: Main },
    hello :{screen :SignUp}
  },
  {
    initialRouteName: 'Splash',
  }
)

const App = createAppContainer(RootStack);
export default App


