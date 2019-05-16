import React from 'react';
import { StyleSheet, Slider, View } from 'react-native';
import DiceFrame from './DiceFrame.js'



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      slideValue: 2,
    }
  }

  render() {

    diceList = []; 
    currentHBox = [];
    for (let i  = 0; i < this.state.slideValue; i++){
      if (currentHBox.length == 0 && i+1 == this.state.slideValue){
        diceList.push(
          <View style={styles.hbox}>
            <DiceFrame key={i}/>
          </View>
        );
        break;
      } else {
      currentHBox.push(<DiceFrame key={i}/>)
      }
      if(currentHBox.length == 2){
        diceList.push(
          <View style={styles.hbox}>
            {currentHBox.shift()}
            {currentHBox.shift()}
          </View>
        );
      }
    }
    

    return (
      <View style={styles.container}>
        {diceList}
        <Slider 
          style={styles.slider}
          step={1}
          minimumValue={0}
          maximumValue={6}
          thumbTintColor='#000'
          maximumTrackTintColor='#999'  
          minimumTrackTintColor='#555'
          onValueChange={(slideValue) => this.setState({slideValue})}
          value={this.state.slideValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    position: "absolute",
    bottom: 5,
    width: '80%',
    zIndex: 100,
  },
  hbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20, 
  },
});
