import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import tachyons from 'styled-components-tachyons';

export default  class IntroScreen extends React.Component {
componentWillMount() {
  this.animatedValue = new Animated.Value(0)
}
componentDidMount() {
Animated.timing( this.animatedValue, {
  toValue: 1,
  duration: 1000
} ).start( );

}
  static navigationOptions = {
    title: 'Welcome',
  };
  onIntroButtonPress = () => {
Animated.timing( new Animated.Value(1), {
  toValue: 0,
  duration: 1000,
  easing: Easing.back
} ).start(start =>     this.props.navigation.navigate('login') ) ;  
  
  }
  render() {
    const animatedStyle = { opacity: this.animatedValue}
    return (
    <View style={styles.container}>
      <Animated.View View style={[styles.box, animatedStyle]}>
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
        </Animated.View>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: 'blue',
  }
});


