import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Math } from Math;

class ShowDice extends React.Component {
  render(){
    return(
      <View>
          
      </View>
    )
  }
}




class DiceFrame extends React.Component {
  getRandom() {
    Math.floor(Math.random()*Math.floor(6))
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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

export default DiceFrame;