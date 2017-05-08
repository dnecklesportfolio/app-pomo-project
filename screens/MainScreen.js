import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import tachyons from 'styled-components-tachyons';

export default  class MainScreen extends React.Component {
  render() {
    return (
      <View  style={styles.container}>
        <Text>Main screen </Text>
                <Text>Main screen </Text>
                        <Text>Main screen </Text>
                                <Text>Main screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


