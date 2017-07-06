import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from '../styles.js';

class ListItem extends Component {
  render() {
    return(
      <View style={styles.listItem}>
        <Text style={styles.listItemTitle}>{this.props.task.name}</Text>
      </View>
    );
  }
}

module.exports = ListItem;
