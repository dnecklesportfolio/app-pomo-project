import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import tachyons from 'styled-components-tachyons';

export default  class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
     <View style={styles.container}>

        <Text>Intro screentetst</Text>
              
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


