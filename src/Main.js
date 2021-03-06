import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,Button} from 'react-native'
import firebase from '@react-native-firebase/app'

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
    this.BackToLogin = this.BackToLogin.bind(this);
  }
  BackToLogin() {
    this.props.navigation.navigate('Auth')
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}
        </Text>
        <Button title="LogOut"
        onPress = {this.BackToLogin}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
