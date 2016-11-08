'use strict';
import React, {Component, PropTypes as T } from 'react';
import {View, ScrollView, Text, Image, Linking, TouchableHighlight} from 'react-native';
import { COLOR, ThemeProvider, Toolbar, Button } from 'react-native-material-ui';
// import AuthService from '../utils/AuthService.jsx';
// import Navigation from './nav.jsx';
// import Auth0Lock from '../../node_modules/auth0-lock';
import Footer from './footer';
import uiTheme from '../theme/theme.js';

import ProfileCreation from './profileCreation';

const House = require('../assets/house.png');
const Connect = require('../assets/connect.png');
const MeetUp = require('../assets/meetUp.png');
const Erica = require('../assets/erica.png');
const Lucas = require('../assets/lucas.png');
const Philip = require('../assets/philip.png');
const Kevin = require('../assets/kevin.png');
const cover = require('../assets/cover2.jpg');


// Stateless Components

// component that will show clickable site features for visitors
class IconItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton(url) {
  console.log(url);
  Linking.openURL(url).catch(err => console.log('an error occurred', err));
  }

  render() {
    if (this.props.link){
      // console.log('testing');
      return (
      <View style={styles.iconView}>
      <TouchableHighlight onPress={() => this._onPressButton(this.props.link)}>
        <Image style={styles.iconItems} source={this.props.url} />
      </TouchableHighlight>
        <Text>{this.props.display}</Text>
        <Text>{this.props.info}</Text>
      </View>
      )
    } else {
      return (
      <View style={styles.iconView}>
        <Image style={styles.iconItems} source={this.props.url} />
        <Text>{this.props.display}</Text>
        <Text>{this.props.info}</Text>
      </View>
    )

    }

  };
};

// component that displays the development team and links to their github page
class TeamIcon extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton(url) {
    console.log(url);
    Linking.openURL(url).catch(err => console.log('an error occurred', err));
  }

 render() {
    return (

      <View style={styles.teamIconView}>
        <TouchableHighlight onPress={() => this._onPressButton(this.props.link)}>

        <Image style={styles.teamPhotos} source={this.props.url}/>

        </TouchableHighlight>
        <Text>{this.props.display}</Text>
      </View>

    );
  };
};

// component for the home page
//line 59 <Navigation auth={this.props.auth}/>
class Home extends Component {
  constructor(props){
    super(props)
  }

  _navigate(path) {
    this.props.navigator.push({
      name: path,
    })
  }

  render () {
    console.log(this.props.initUser)
    if (this.props.initUser) {
      return (
        <ProfileCreation user={this.props.user} profile={this.props.profile}/>
        );
    } else {
    return (
      <View>
        <ScrollView>
          <View >
            <View style={{alignItems: 'center'}}>
              <Text style={styles.heading}>Ok Pluto</Text>
              <Text>An online playground for your best friend</Text>
            </View>
            <Image style={{height:200, width: 500}} source={cover}/>

          </View>
          <View style={{alignItems:'center'}}>
            <ThemeProvider uiTheme={uiTheme}>
              <Button accent raised text="Check out Events!" onPress={ () => this._navigate('Events') }/>
            </ThemeProvider>
            <Text>Get to know fellow dog owners in your area</Text>
          </View>

          <View style={{alignItems:'center', paddingTop: 20}}>
            <ThemeProvider uiTheme={uiTheme}>
              <Button accent raised text="Check out your Profile!" onPress={ () => this._navigate('Profile') }/>
            </ThemeProvider>
          <Text>Get to know fellow dog owners in your area</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <ThemeProvider uiTheme={uiTheme}>
              <Button accent raised text="Check out Users!" onPress={ () => this._navigate('UsersPage') }/>
            </ThemeProvider>
            <Text>Get to know fellow dog owners in your area</Text>
          </View>

          <View style={{alignItems:'center', paddingTop: 20}}>
            <ThemeProvider uiTheme={uiTheme}>
              <Button accent raised text="Create Profile" onPress={ () => this._navigate('ProfileCreation') }/>
            </ThemeProvider>
          <Text>Create a profile</Text>
          </View>


          <View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <IconItem
                url={Connect}
                display={'CONNECT'}
                info={'OkPluto instantly puts you in touch with other dog lovers from around the world'}
                // onTouchTap={this.props.auth.signup.bind(this)}
              />
              <IconItem
                url={MeetUp}
                display={'MEET UP'}
                info={'We make it easy for you to set up walks and dog park meet ups with other local dog owners'}
                // onTouchTap={this.props.auth.signup.bind(this)}
              />
            </View>
            <View style={{ alignItems:'center'}}>
              <IconItem
                url={House}
                display={'ADOPT A DOG'}
                info={'Don\'t have a dog? No worries! Adopt your new best friend at a shelter near you!'}
                link={'https://www.petfinder.com/animal-shelters-and-rescues/search'}
              />
            </View>
          </View>


          <View style={styles.team}>
            <Text style={styles.centered}>Our Development Team</Text>
            <View style={styles.teamView}>
              <TeamIcon
                url={Erica}
                display={'Erica Fanelle'}
                link={'https://www.linkedin.com/in/erica-fanelle'}
              />
              <TeamIcon
                url={Lucas}
                display={'Lucas Hawes'}
                link={'https://www.linkedin.com/in/lucashawes'}
              />
              </View>
              <View style={styles.teamView}>
              <TeamIcon
                url={Philip}
                display={'Philip Dorin'}
                link={'https://www.linkedin.com/in/philip-dorin-0705a3b3'}
              />
              <TeamIcon
                url={Kevin}
                display={'Kevin Kim'}
                link={'https://www.linkedin.com/in/kevin-ji-kim'}
              />
            </View>
          </View>

        </ScrollView>
        <Footer navigate={this._navigate.bind(this)}/>
      </View>
    );}
  };
};
  //line 123 <Footer />
// for debugging/developing
// Home.propTypes = {
//   location: T.object,
//   auth: T.instanceOf(AuthService)
// };

const styles= {
  teamPhotos: {
    paddingTop: 40,
    paddingBottom: 40,
    height: 100,
    width:100,
    borderRadius: 50,
    borderWidth: .5,
    // justifyContent:'space-between'
  },
  teamView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconView: {
    width: 150,
    height: 200,
    alignItems:'center',
    paddingBottom: 12,
    paddingTop:10
  },
  iconItems: {
    height: 100,
    width:100,
    borderRadius: 50,
    borderWidth: 1
  },
  centered:{
    textAlign:'center',
    fontWeight: 'bold',
    padding: 8
  },
  team: {
    marginTop: 15,
    backgroundColor: '#BDBDBD'
  },
  teamIconView: {
    alignItems:'center',
    paddingBottom: 5
  },
  heading: {
    color: 'darkblue',
    fontSize: 30,
    fontWeight:'bold',
    textAlign:'center'
  }
}



module.exports = Home;
