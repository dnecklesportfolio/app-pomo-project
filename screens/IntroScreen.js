import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import tachyons from 'styled-components-tachyons';

export default  class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  onIntroButtonPress = () => {
    this.props.navigation.navigate('login');
  }
  render() {
    return (
     <View style={styles.container}>

        <Text>Welcome
to PomoTime</Text>

<Text>You will sign in through fb
first, then once logged in
tap any of the timer
to configure them.</Text>
         <Button
  raised
  buttonStyle={{backgroundColor: 'gray', borderRadius: 5}}
  textStyle={{textAlign: 'center'}}
  title={"SIgn In!"}
  onPress={this.onIntroButtonPress} />     
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


