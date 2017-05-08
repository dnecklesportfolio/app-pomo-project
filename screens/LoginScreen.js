import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

import styled from 'styled-components/native'
import tachyons from 'styled-components-tachyons'

export default  class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AuthenticateScreen screen </Text>
                <Text>AuthenticateScreen screen </Text>
                        <Text>AuthenticateScreen screen </Text>
                                <Text>AuthenticateScreen screen </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

