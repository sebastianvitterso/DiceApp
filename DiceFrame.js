import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

class ShowDice extends React.Component {
  num = this.props.num;
  render() {
    var images = [
      require('./assets/Dice1.png'),
      require('./assets/Dice2.png'),
      require('./assets/Dice3.png'),
      require('./assets/Dice4.png'),
      require('./assets/Dice5.png'),
      require('./assets/Dice6.png'),
    ];
    var currentChoice = images[this.num - 1];
    return (<View>
      <Image style={styles.diceImage} source={currentChoice} />
    </View>);
  }
}

class RollDice extends React.Component{
  interval = this.props.interval
  getRandom() {
    return Math.floor(Math.random()*Math.floor(6))
  };
  constructor(props){
    super(props);
    this.state = { currentDice: this.getRandom()}

    setInterval(() => (
      this.setState(() => (
        {currentdice: this.getRandom()}
      ))
    ), this.props.interval)
  };
  
  render(){
    return(
      <View>
        <ShowDice num={this.state}/>
      </View>
    )
  }
}


export default class DiceFrame extends React.Component {
  state={
    myNum:this.getRandom(),
    rolling:false,
  }

  constructor(props){
    super(props)
  }
  getRandom() {
    return Math.ceil(Math.random()*Math.floor(6));
  };
  startRoll() {
    this.state.rolling = true;
    this.state.myNum = this.getRandom();
    console.log("startRoll()." + this.state.myNum);
  }
  PartyMan = "PartyMan" + this.state.myNum;

  render() {
    if(this.state.rolling){
      return (
        <View style={styles.container}>
          <RollDice interval={50}/>
          <Text style={styles.paragraph}>PartyWoman</Text>
        </View>
      )
    }
    else{
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={() => this.startRoll()}> 
            <ShowDice num={this.state.myNum}/>
          </TouchableHighlight>
          <Text style={styles.paragraph}>{this.PartyMan}</Text>
        </View>
    );
    }
  }

  
}



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  diceImage: {
    width: 125,
    height: 125,
  },
});
