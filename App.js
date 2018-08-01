import React from 'react';
import { StyleSheet, Text, View, TextInput, Animated } from 'react-native';
import AnimatedBackground from './AnimatedBackground';

export default class App extends React.Component {
  render() {
    return (
      <AnimatedBackground style={{backgroundColor: 'powderblue'}}>
        <TextInput
          style={styles.textInput}
          editable = {true}
          multiline = {true}
          selectionColor = {'#ffffffaa'}
          textAlignVertical = {'top'}
          underlineColorAndroid = {'transparent'}
        />
      </AnimatedBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    width: '100%',
    borderColor: 'transparent',
    fontFamily: 'monospace',
    color: '#fff',
    fontSize: 17,
    textAlign: 'left',
    paddingTop: 75,
    paddingBottom: 75,
    paddingLeft: 40,
    paddingRight: 40
  }
});
