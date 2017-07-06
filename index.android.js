import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View
} from 'react-native';
import styles from './styles.js';
import * as firebase from 'firebase';
import ListItem from './app/ListItem';

export default class todoApp extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows([
        {name: 'Sleep'}, {name: 'Eat'}, {name: 'Code'}
      ])
    };
  }

  _renderItem(task) {
    return (
      <ListItem task={task} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.navbar} title="Todo List" />
        <ListView enableEmptySections={true} dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)} style={styles.listView} />
      </View>
    );
  }
}

AppRegistry.registerComponent('todoApp', () => todoApp);
