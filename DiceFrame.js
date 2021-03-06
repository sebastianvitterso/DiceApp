import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

class ShowDice extends React.Component {
  constructor(props){
    super(props);
    console.log("Tjohei nummer: "+this.props.num)
    this.state={
      num: this.props.num,
    };
  }
  render() {
    var images = [
      require('./assets/Dice1.png'),
      require('./assets/Dice2.png'),
      require('./assets/Dice3.png'),
      require('./assets/Dice4.png'),
      require('./assets/Dice5.png'),
      require('./assets/Dice6.png'),
    ];
    var currentChoice = images[this.props.num - 1];
    console.log("rendering ShowDice: num is " + this.state.num + ", props.num is " + this.props.num)
    return (<View>
      <Image style={styles.diceImage} source={currentChoice} />
    </View>);
  }
  
}

class RollDice extends React.Component{
  interval = this.props.interval
  getRandom() {
    console.log("getRandom called in RollDice.")
    return Math.floor(Math.random()*Math.floor(6));
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
    console.log("rendering RollDice")
    return(
      <View>
        <ShowDice num={this.state.currentDice}/>
      </View>
    )
  }
}


export default class DiceFrame extends React.Component {
  state={
    myNum:this.getRandom(),
    rolling:false,
  };
  constructor(props){
    super(props)
  };
  getRandom() {
    return Math.ceil(Math.random()*Math.floor(6));
  };
  startRoll() {
    this.state.rolling = false; //TODO: Wait with this. 
    this.setState({myNum: this.getRandom()});
    console.log("startRoll()." + this.state.myNum);
  };
  PartyMan = "PartyMan" + this.state.myNum;
  PartyWoman = "PartyWoman" + this.state.myNum;

  render() {
    console.log("rendering DiceFrame, sending current myNum: " + this.state.myNum)
    if(this.state.rolling){
      return (
        <View style={styles.container}>
          <RollDice interval={50}/>
          <Text style={styles.paragraph}>{this.PartyWoman}</Text>
        </View>
      )
    }
    else{
      return (
        <View style={styles.container}>
          <TouchableOpacity onPressIn={() => this.startRoll()}> 
            <ShowDice num={this.state.myNum}/>
          </TouchableOpacity>
        </View>
    );
    }
  }  
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
