import React, { Component, PropTypes as T } from 'react';
import { Alert, View, ScrollView, Text, Image, Linking } from 'react-native';
import { getEvents } from '../services/eventServices';
import EventList from './eventList';
import Banner from './banner';
import AutoComplete from 'react-native-autocomplete-input';
import Footer from './footer';
import { Card, ThemeProvider, Toolbar, Button } from 'react-native-material-ui';
import uiTheme from '../theme/theme.js';

const friends = require('../assets/friends.png');
const trails = require('../assets/trails.jpg');
const beach = require('../assets/beach.jpg');
const dogpark = require('../assets/dogpark.jpg');
const park = require('../assets/park.jpg');

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      search: '',
      displayedEvents: [],
      searchSource: []
    };
    this.handleChange = this.handleChange.bind(this)
  }


//initial get request for the events
  componentDidMount() {
    var self = this;
    getEvents()
    .then( (events) => {
      // Tracker to match distance returned from Google API to correct event in the database
      // var eventDests = [];
      // var tracker = 0;
      // events.events.forEach(event => {
      //   if(event.lat && event.lng) {
      //     event.tracker = tracker;
      //     tracker++;
      //     eventDests.push({lat: event.lat, lng: event.lng})
      //   }
      // })

      let sortedEvents = events.events;

      //Set events into state after getting distance
      self.setState({events: sortedEvents});
      self.setState({displayedEvents: sortedEvents});

      //Set Searchable options for autocomplete search
      var searchArray = [];
      events.events.forEach(event => {
        searchArray.push(event.eventname, event.loc, event.attendees)
      })
      self.setState({searchSource: searchArray})
      })
    }

    //navigation path for our footer
    _navigate(path) {
      this.props.navigator.push({
        name: path,
      });
    }

// Live update events displayed on page based on user search input
// TODO: need a debounce function so this doesn't fire contantly
// as user types

// line 89


handleChange(text, userNames) {
  let displayedEvents = this.state.events.filter(event => {
    if(event.eventname && event.loc) {
      for (let key in event) {
        if (event[key] === undefined) {
          event[key] = '';
        }
      }
      let re = new RegExp(text, "gi")
      return event.eventname.match(re) || event.loc.match(re)
    }
  });
  this.setState({displayedEvents: displayedEvents})
}
//           <EventList events={this.state.displayedEvents} userInfo={this.props.userInfo} />

render () {
  console.log(this.state.displayedEvents)
  let display = [];
  this.state.displayedEvents.forEach( (event) => {
    event.date = event.date.slice(0, 10)

    const eventPics = [friends, beach, trails, dogpark, park]

    let pic = Math.floor(Math.random() * eventPics.length)
    pic = eventPics[pic]
    var alertMessage = "Are you sure you want to attend " + event.eventname + "?"

    display.push(
      <View style={{flex: 1, flexDirection:"column", padding: 20, alignItems: 'center', backgroundColor: 'white', marginBottom: 15}}>
        <View style={{flex:10, flexDirection:"column", backgroundColor:'#BDBDBD', width:900, alignItems: 'center'}}>
          <Text style={{fontWeight:'bold', fontSize: 24, textShadowOffset: {width: 2, height: 2}, textShadowRadius: 1, textShadowColor: 'black', padding: 20, color: 'white'}}>
            {event.eventname}
          </Text>
        </View>
        <Text style={{fontStyle: 'normal', fontSize: 18}}>
          {event.loc}
        </Text>
        <Text style={{fontStyle: 'italic'}}>
          {event.date}
        </Text>
        <Text style={{fontStyle: 'oblique'}}>
          {event.creator}
        </Text>
        <View>
          <Image
          style={{width: 200, height: 200}}
          source={pic} />
        </View>
        <Text style={{fontStyle: 'normal'}}>
          {event.attendees}
        </Text>
        <ThemeProvider uiTheme={uiTheme}>
        <View>
          <Button primary raised text="Attend" onPress={() => Alert.alert(
            alertMessage,
            [
              {text: "Heck Yeah!", onPress: () => console.log('OK Pressed!')},
              {text: "Don't Sign Me Up!", onPress: () => console.log('Cancel Pressed!')}
            ]
          )}/>
        </View>
        </ThemeProvider>
      </View>
      )
  })

  return (
    <View style={{flex:1}}>
    <ScrollView>
      <Banner display={'Local Events'} />
        <View>
          <AutoComplete
          placeholder="Search Events"
          data={[]}
          onChangeText={this.handleChange}
          onRender={this.handleChange}
          />
        </View>
        <View style={{marginBottom: 20}}>
          {display}
        </View>
      </ScrollView>
      <Footer navigate={this._navigate.bind(this)}/>
    </View>
    )
  }
}



module.exports = Events;