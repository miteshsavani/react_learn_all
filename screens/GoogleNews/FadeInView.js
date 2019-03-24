import React from 'react';
import { Animated, Text, View, Easing } from 'react-native';

class FadeInView extends React.Component {
    state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
  
    componentDidMount() {
      Animated.timing(                  // Animate over time
        this.props.fadeAnim,            // The animated value to drive
        {
          toValue: this.props.end,                   // Animate to opacity: 1 (opaque)
          duration: 500,              // Make it take a while
          easing: Easing.bounce
        }
      ).start();                        // Starts the animation
    }

    componentDidUpdate() {
      Animated.timing(                  // Animate over time
        this.props.fadeAnim,            // The animated value to drive
        {
          toValue: this.props.end,                   // Animate to opacity: 1 (opaque)
          duration: 500,              // Make it take a while
          easing: Easing.bounce
        }
      ).start();                        // Starts the animation
    }
  
    render() {
      let { fadeAnim } = this.props;
  
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...this.props.style,
            top: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }

  export default FadeInView;