"use strict";

// Divides events into rows of 4 for the
// events page and rows of 3 for the profile
// page, and passes event info to EventDisplay

import React from ('react');
import { View, ScrollView, Text, Image, Linking } from 'react-native';
// import EventDisplay from ('./eventDisplay.js');
// import Loading from './loading.jsx'

// const Row = (props) => (
//   <View>
//     {
//       props.row.map((event) => (
//         <View className={props.class}>
//           <EventDisplay event={event} type='user' userInfo={props.userInfo}/>
//         </View>
//       ))
//     }
//   </View>
// )

class EventList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rowLength = 4;
    // let className = "col-md-3 text-center";
    // if (this.props.type === "profile") {
    //   rowLength = 3;
    //   className = "col-md-4 text-center"
    // }
    // if (this.props.events.length) {
    //   let events = this.props.events
    //   let rows = [];
    //   let row = [];
    //   for (let i = 0; i < events.length; i++) {
    //     if (i % rowLength === 0 && row.length > 0) {
    //       rows.push(row);
    //       row = [];
    //     }
    //     row.push(events[i]);
    //     if (i === events.length - 1 && row.length > 0) {
    //       rows.push(row);
    //     }
    //   }
    //   return (
    //     <View>
    //       {
    //         rows.map(row => (
    //           <Row row={row} userInfo={this.props.userInfo} class={className}/>
    //         ))
    //       }
    //   </View>
    //   )
    // } else if (this.props.noEvents) {
      return (
        <Text>No Events to Show</Text>
      )
    // } else {
    //   return (
    //     <Loading />
    //   )
    // }
  }
};

module.exports = EventList;
