"use strict";

import React, { Component } from 'react';
import {View, Text, Image, Header} from 'react-native';
import {Card, Avatar, CardText, CardActions} from 'react-native-material-ui'
import DialogButton from './dialogButton.js';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Avatar from 'material-ui/Avatar';

class UserDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log('user on UserDisplay', this.props.user)
    return (
      <View style={styles.users}>
      <View>
        <Text>Pup Name:{this.props.user.dogname} </Text>
        <Text>Owner: {this.props.user.firstname}</Text>
        <Text>Age: {this.props.user.dogAge} </Text>
        <Text>Breed: {this.props.user.dogBreed} </Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
          <Image source= {{uri: this.props.user.profilepic}}
               style={styles.image}
                />
        </View>
      </View>
    )
  }
}

const styles={
  users: {
    borderWidth: 2,
    borderColor: 'darkblue',
    borderRadius: 30,
    paddingLeft: 5,
    paddingTop:10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  image: {
    height: 100,
    width: 100,
    paddingTop: 10,
    borderRadius: 15
  }
}

// {
// <View>
//              <Text>Name:{this.props.user.dogname}</Text>
//              <Text>{'From: ' + this.props.user.loc}</Text>
//           </View>

//           <View>
//             <Text>Owner:</Text> {this.props.user.firstname}<br />
//             <Text>Age: </Text>{this.props.user.dogAge}<br />
//             <Text>Breed: </Text>{this.props.user.dogBreed}<br />
//           </View>
//         </View>

// }




export default UserDisplay;
