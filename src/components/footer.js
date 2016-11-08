/*
  This file contains the homepage footer! A few links to our github page if users are interested. Pretty simple. Note that there's a different footer component to be shown after users log in within footer-loggedIn.js (although you've probably already seen it).
*/

"use strict";

import React, { Component, Image, PropTypes } from 'react';
import { View, ListView, Text, Navigator, NativeModules, StyleSheet } from 'react-native';
import uiTheme from '../theme/theme.js';
import NavigationBar from 'react-native-navbar';
import { COLOR, ThemeProvider, Toolbar, Button } from 'react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
});

 /* <View>
    <Text>Ok Pluto</Text>
    <View>
      <ListView>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Linking.openURL("https://github.com/okpluto/okpluto/blob/master/_PRESS-RELEASE.md")}>
          <Text>Why choose OK Pluto</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Linking.openURL("https://github.com/okpluto/okpluto/blob/master/README.md")}>
          <Text>About Us</Text>
        </TouchableHighlight>
      </ListView>
    </View>
  </View> */

    /* <ActionButton
    /> */

class Footer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
      <ThemeProvider uiTheme={uiTheme}>
          <Toolbar
            leftElement="home"
            onLeftElementPress={() => this.props.navigate('Home')}
            centerElement="Navbar"
            rightElement={{
              actions: ['verified-user']
            }}
            onRightElementPress={() =>
              (
                // console.log(this)
                this.props.navigate('Profile')
              )
            }
          />

      </ThemeProvider>
      </View>
    )
  }
}

module.exports = Footer;