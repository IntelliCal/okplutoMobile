/*
  This file contains the homepage footer! A few links to our github page if users are interested. Pretty simple. Note that there's a different footer component to be shown after users log in within footer-loggedIn.js (although you've probably already seen it).
*/

"use strict";

import React from 'react';
import { View, ListView, Text, Linking, TouchableHighlight } from 'react-native';

const Footer = (props) => (
  <View>
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
  </View>
)

module.exports = Footer;