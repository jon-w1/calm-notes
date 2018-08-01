import React from 'react';
import { View, Animated } from 'react-native';

let delay = 5000;
let duration = 10000;

export default class AnimatedBackground extends React.Component {
  state = {
    iterator: new Animated.Value(0),
    r1: 102,
    g1: 204,
    b1: 153,
    r2: 0,
    g2: 0,
    b2: 0,
  }

  componentDidMount() {
    this.animateUp()
  }

  animateUp() {
    this.setState({
      r2: this.getValue(),
      g2: this.getValue(),
      b2: this.getValue()
    });
    Animated.timing(
      this.state.iterator,
      {
        toValue: 1,
        delay: delay,
        duration: duration,
      }
    ).start(() => this.animateDown())
  }

  animateDown() {
    this.setState({
      r1: this.getValue(),
      g1: this.getValue(),
      b1: this.getValue()
    });
    Animated.timing(
      this.state.iterator,
      {
        toValue: 0,
        delay: delay,
        duration: duration,
      }
    ).start(() => this.animateUp())
  }

  getValue() {
    return Math.floor(Math.random() * 100 ) + 100; // number between 100 and 200
  }

  render() {
    let { iterator } = this.state;

    let color1 = 'rgba(' +this.state.r1+ ',' +this.state.g1+ ',' +this.state.b1+ ', 1)';
    let color2 = 'rgba(' +this.state.r2+ ',' +this.state.g2+ ',' +this.state.b2+ ', 1)';
    let color = iterator.interpolate({
      inputRange: [0, 1],
      outputRange: [color1, color2]
    });

    return (
      <Animated.View
        style={{
          ...this.props.style,
          backgroundColor: color,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}