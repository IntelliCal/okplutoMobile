"use strict";
import React from 'react-native';

// fetch call to get latitude and longitude of an address
const getLatLng = function(address) {
  return fetch("https://tranquil-tundra-43211.herokuapp.com/api/geocode?loc=" + address)
    .then(response => response.json())
    .catch(error => {
        console.log(error);
      });
};
  // return new Promise((resolve, reject) => {
  //   $.ajax({
  //     url: 'api/geocode?loc=' + address,
  //     type: 'GET',
  //     success: resolve,
  //     error: reject
  //   });
  // });
// };

// Update user info
const updateDb = function(newProps) {
  return fetch("https://tranquil-tundra-43211.herokuapp.com/api/users", {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: newProps
  }).catch((error) => {
        console.log(error);
      });
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/users',
//       type: 'PUT',
//       data: newProps,
//       success: resolve,
//       error: reject
//     });
//   });
// };

// Add latitude and longitude values then make ajax call to update user info
//NOT SURE HOW TO GET THIS TO WORK
// const updateUser = function(newProps) {
//   newProps.dbId = localStorage.getItem('mongoUserId');
//   return new Promise((resolve, reject) => {
//     if (newProps.loc) {
//       getLatLng(newProps.loc)
//         .then(function(results) {
//           newProps.lat = results.lat;
//           newProps.lng = results.lng;
//           updateDb(newProps)
//           .then(resolve)
//         });
//     } else {
//       updateDb(newProps)
//       .then(resolve)
//     }
//   })
// };

// Get all users from db
const getUsers = function() {
  return fetch("https://tranquil-tundra-43211.herokuapp.com/api/users")
    .then ( response => response.json())
    .catch((error) => {
        console.log(error);
      });
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/users',
//       type: 'GET',
//       success: resolve,
//       error: reject
//     });
//   });
// }

//POST to API to get mongoDB user info
const saveUser = function(idToken) {
  return fetch("https://tranquil-tundra-43211.herokuapp.com/signin", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      id: idToken
    }
  }).catch((error) => {
        console.log(error);
      });
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: '/signin',
//       type: 'POST',
//       data: {id: idToken},
//       success: resolve,
//       error: reject
//     });
//   });
// }

// Get current user's info from db
const findUser = function(dbId) {
  return fetch(`https://tranquil-tundra-43211.herokuapp.com/api/users?dbId=${dbId}`)
    // .then( response => response)
    .then( response => response.json())
    .catch(error => {
      console.log(error);
    });
  // dbId = dbId || localStorage.getItem('mongoUserId');
  // return new Promise((resolve, reject) => {
  //   $.ajax({
  //     url: `api/users?dbId=${dbId}`,
  //     type: 'GET',
  //     success: resolve,
  //     error: reject
  //   });
  // });
}

// Delete a user
const deleteUser = function(dbId) {
  return fetch("https://tranquil-tundra-43211.herokuapp.com/api/users", {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      dbId: dbId
    }
  }).catch(error => {
        console.log(error);
      });
};
  // dbId = dbId || localStorage.getItem('mongoUserId');
  // return new Promise((resolve, reject) => {
  //   $.ajax({
  //     url: 'api/users',
  //     type: 'DELETE',
  //     data: {dbId: dbId},
  //     success: resolve,
  //     error: reject
  //   })
  // })
// }

module.exports = {
  getLatLng: getLatLng,
  updateDb: updateDb,
  getUsers: getUsers,
  saveUser: saveUser,
  findUser: findUser,
  // updateUser: updateUser,
  deleteUser: deleteUser
}