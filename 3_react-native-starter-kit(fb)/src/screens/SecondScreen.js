import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

class SecondScreen extends Component {
  static navigationOptions = {
    title: 'Second Screen'
  };
  render() {
    const { view } = styles;
    return (
      <View style={view}>
        <Text>Details Screen</Text>
        {/* <Button title="Go to Home page" onPress={() => this.props.navigation.navigate('Home')} /> */}
        <Button title="Go to Scaner page" style={{}} onPress={() => this.props.navigation.push('Scaner')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { SecondScreen };
