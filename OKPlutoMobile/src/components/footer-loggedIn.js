/*
  This file contains the footer users see after they log in! Using hashHistory, it redirects users to the corresponding description given for the page (Users, Events, or Profile). Note that there's a different footer component to be shown on the home page within footer.js (right below this one).
*/

"use strict";

import React from 'react';
import { View, ListView, Text, TouchableHighlight } from 'react-native';

const FooterLoggedIn = (props) => (
  <View>
    <Text>Ok Pluto</Text>
    <View>
      <ListView>
        <TouchableHighlight onClick={() => this.props.navigator.push('/users')}>
          <Text>Users</Text>
        </TouchableHighlight>
        <TouchableHighlight onClick={() => this.props.navigator.push('/events')}>
          <Text>Events</Text>
        </TouchableHighlight>
        <TouchableHighlight onClick={() => this.props.navigator.push('/profile')}>
          <Text>Profile</Text>
        </TouchableHighlight>
      </ListView>
    </View>
  </View>
)

module.exports = FooterLoggedIn;