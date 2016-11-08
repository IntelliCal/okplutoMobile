"use strict";

import  UserList from './usersList.js';
import { getUsers } from '../services/userServices.js'
// import NavLoggedIn from './nav-loggedIn.jsx';
import React, { PropTypes as T,  Component } from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ThemeProvider from 'react-native-material-ui/';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AutoComplete from 'material-ui/AutoComplete';
// import MenuItem from 'material-ui/MenuItem';
import uiTheme from '../theme/theme.js';
// import { getDistance } from '../services/distanceServices';
import Banner from './banner.js';
import AutoComplete from 'react-native-autocomplete-input';
import Footer from './footer.js';

class UsersPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: '',
      displayedUsers: [],
      searchSource: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

    _navigate(path) {
    this.props.navigator.push({
      name: path,
    })
  }


  componentDidMount() {
    var self = this;
    getUsers()
    .then((users) => {
      console.log(users);
      var userDests = [];
      var tracker = 0;

      //Don't display current user
      users.users = users.users.filter((user) => {
        // return user._id !== this.props.userInfo._id;
        return user.id !== this.props.profile.userId;
      });

      // Set searchable options
      var searchArray = [];
      users.users.forEach(user => {
        searchArray.push(user.firstname + ' ' + user.lastname, user.dogname)
      })
      self.setState({searchSource: searchArray});

      //tracker for matching distance to user
      // users.users.forEach(user => {
      //   if(user.lat && user.lng) {
      //     user.tracker = tracker;
      //     tracker++;
      //     userDests.push({lat: user.lat, lng: user.lng});
      //   }
      // });



      let sortedUsers = users.users;
        //Set users to display after getting distance info
        self.setState({users: sortedUsers});
        self.setState({displayedUsers: sortedUsers});
      // })
    })
  }

  handleChange(text, userNames) {
    // Change displayedUsers array based on the search input
    var displayedUsers = this.state.users.filter(user => {
      if (user.dogname === undefined) {user.dogname = ''}
      var re = new RegExp(text, "gi")
      var name = user.firstname + ' ' + user.lastname;
      return name.match(re) || user.dogname.match(re)
    })
    this.setState({displayedUsers: displayedUsers});
  }

  render () {
    console.log(this.props)
    return (
      <View style={{flex: 1}}>
        <Banner display={'Local Users'} />
        <ScrollView>
          <AutoComplete
                defaultValue={"Search Users"}
                data={[]}
                onChangeText={this.handleChange}
                onRender={this.handleChange}
             />

              <UserList
                users={this.state.users}
                // resetUserInfo={this.props.resetUserInfo}
              />

        </ScrollView>
        <Footer navigate={this._navigate.bind(this)}/>
      </View>

    )
  }

}



module.exports = UsersPage;
