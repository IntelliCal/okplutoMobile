import React, { PropTypes as T } from 'react';
import { View } from 'react-native';

// passes authorization object to all child routes

export class Container extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    };

    return (
      <View>
        {children}
      </View>
    )
  };
};

export default Container;