/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import AuthService from './utils/AuthService.jsx';
// import $ from 'jquery';

// import { auth0 } from '../config/auth0.js';
// import UsersPage from './components/usersPage.jsx'
// import Container from './components/container.jsx'
// import Profile from './components/profile.jsx'
// import Events from './components/events.jsx'
// import ProfileCreation from './components/profileCreation.jsx'
// import Loading from './components/loading.jsx'
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import InfoDrawer from './components/infoDrawer.jsx'

import uiTheme from './src/theme/theme.js';
import {ThemeProvider} from 'react-native-material-ui';
import Home from './src/components/home';
import Profile from './src/components/profile';
import UsersPage from './src/components/usersPage';
import ProfileCreation from './src/components/profileCreation';
import Auth0Lock from 'react-native-lock';
import authobj from './config/auth0';
import Events from './src/components/events';
import React, { Component } from 'react';
import { findUser, updateUser } from './src/services/userServices';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

//Lucas
var lock = new Auth0Lock(authobj);

//Lucas
const profileObj = {};
const tokenObj = {};

var initUser = false;
var theUser = {};


// import Router from 'react-native-routing';

export default class OKPlutoMobile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routeA: {name: 'Home'}
    }
  }

  componentWillMount() {
    var reactClass = this;
    lock.show({}, (err, profile, token) => {
    if (err) {
      console.log(err);
      return;
    }
    // Authentication worked!
    profileObj = profile;
    tokenObj = token;
    console.log('profileObj: ',profileObj);
    console.log('tokenObj: ',tokenObj);

    fetch('https://tranquil-tundra-43211.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: tokenObj.idToken
      })
    })

    console.log('running find user');
      findUser(profileObj.userId)
      .then((user) => {
        if (user[0].dogname === undefined) {
          console.log("new user");
          initUser = true;
          theUser = user;
          reactClass.forceUpdate();
        } else {
          console.log('not a new user');
        }
      })
      .catch(error => {
        console.log(error);
      });


    });
  }


  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'Home') {
      return <Home navigator={navigator} initUser={initUser} user={theUser} profile={profileObj}/>
    } else if (name === 'Profile') {
      return <Profile navigator={navigator} profile={profileObj}/>
    } else if (name === 'Events') {
      return <Events navigator={navigator} {...passProps}/>
    } else if (name === 'UsersPage') {
      return <UsersPage navigator={navigator} profile={profileObj} token={tokenObj} />
    } else if (name === 'ProfileCreation') {
      return <ProfileCreation navigator={navigator} {...passProps} profile={profileObj}/>
    }
  }

  render() {
    return (
      <Navigator
      style={styles.viewStyle}
      initialRoute={{name: 'Home'}}
      renderScene={this.renderScene}
      configureScene={(route, routeStack) =>
      Navigator.SceneConfigs.VerticalUpSwipeJump}
      />
    )
  }
}

const styles={
  viewStyle: {
    paddingTop: 20,
    backgroundColor:'#B3E5FC'
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
console.disableYellowBox = true;

AppRegistry.registerComponent('OKPlutoMobile', () => OKPlutoMobile);
