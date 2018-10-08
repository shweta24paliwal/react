import React, {Component} from 'react';


function BirthdayButton(props){
  return(
    <button onClick={props.cardHandler}>Birthday</button>
  )
}


class Greetings extends Component{
  constructor(props){
    super(props);
    this.state = {cards: null};
    this.birthdayCardHandler = this.birthdayCardHandler.bind(this);
    this.anniversaryCardHandler = this.anniversaryCardHandler.bind(this);
  }

  birthdayCardHandler(){
    this.setState({cards:"Birthday"});
  };
  anniversaryCardHandler(){
    this.setState({cards:"Anniversary"});
  };

  render(){
    let cardContainer = "Please choose any card";
    if(this.state.cards == "Birthday"){
      cardContainer = (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Slwu76TBCAs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Q9EhxjnkIY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </div>
      );
    }
    if(this.state.cards == "Anniversary"){
      cardContainer = (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3YzdaBkCneE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </div>
      );
    }
    
    
    return(
      <div>
        <h1>Greeting cards:</h1>
        <BirthdayButton cardHandler={this.birthdayCardHandler}/>
        <button onClick={this.anniversaryCardHandler}>Anniversary</button><br/>
        
        {cardContainer}
      </div>
    );
  };
}
export default Greetings
