'use strict';
import React, {Component} from 'react';
import {View, ScrollView, Text, Image, Linking} from 'react-native';
import ProfileEditDialog from './profileEditDialog'


// {this.props.userInfo.firstname} {this.props.userInfo.lastname}
// {this.props.userInfo.loc}
// <Image source={this.props.userInfo.picLink} alt="Pic"/>
// {this.props.userInfo.dogname}
// {this.props.userInfo.dogBreed}
// {this.props.userInfo.dogAge}
// <ProfileEditDialog userInfo={this.props.userInfo} resetUserInfo={this.props.resetUserInfo} />
class ProfileDisplay extends Component {
  constructor(props) {
  super(props);
  }


  render(){
    return (
      <ScrollView>
        <View style={styles.smallPadding}></View>
        <View style={styles.cardView}>
        <View>
            <Text style={styles.headerText}>
              Your Info
            </Text>
          <Text style={styles.centerText}>Name:{'  '+this.props.profile.name || 'Erica Fanelle'}</Text>
        </View>

        <View>
          <View style={styles.image}>
          <Image
          style={{width:150,height:150, borderRadius:75}}
          source={{uri:this.props.profile.picture || "https://lh4.googleusercontent.com/-3K1RY-pUqQU/AAAAAAAAAAI/AAAAAAAACfc/WFRFZE8FdKY/photo.jpg\
https://lh4.googleusercontent.com/-3K1RY-pUqQU/AAAAAAAAAAI/AAAAAAAACfc/WFRFZE8FdKY/photo.jpg"} } />
          <Text> Profile Picture </Text>
          </View>

          <View>
          <Text style={styles.otherText}>Location: {this.props.profile.loc || 'Cherry Hill, NJ'}</Text>
          <Text></Text>
          </View>
          </View>
          <View style={styles.padding}>
          </View>
          </View>

          <View style={styles.smallPadding}>
          </View>
          <View style={styles.cardView}>
          <View>
            <Text style={styles.headerText}>
              Your Pup's Info
            </Text>
            <Text style={styles.centerText}>Name: {this.props.profile.dogName || 'Tito Fanelle'}</Text>
          </View>

          <View style={styles.image}>
            <Image
              style={{width:150,height:150, borderRadius:75}}
              source={{uri: 'https://i.ytimg.com/vi/KY4IzMcjX3Y/maxresdefault.jpg'}}
              />
          </View>

          <View>
            <Text style={styles.smallPadding}>Breed: {this.props.profile.dogBreed || 'Golden Retriever'}</Text>
            <Text style={styles.otherText}>Age: {this.props.profile.dogAge || '7'}</Text>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  headerText:{
    fontSize: 30,
    fontWeight:'bold',
    textAlign:'center'
  },
  centerText:{
    textAlign:'center',
    fontWeight:'bold'
  },
  otherText:{
    paddingLeft:100
  },
  image:{
    paddingTop: 20,
    paddingBottom: 20,
    alignItems:'center',
  },
  padding:{
    paddingBottom:30
  },
  smallPadding:{
    paddingBottom:15,
    paddingLeft:100
  },
  cardView:{
    borderWidth:2,
    borderColor:'darkblue',
    paddingBottom:15,
    borderRadius:25
  }
}

module.exports = ProfileDisplay;