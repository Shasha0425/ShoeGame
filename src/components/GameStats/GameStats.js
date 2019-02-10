import React, {Component} from "react";
import "./GameStats.css";

class GameStats extends Component {

    state = {
        message: ""
    }

    // function runs on every state change
    componentDidUpdate(prevProps) {

     let newState = {
        }
  
      const {score, topScore} = prevProps

      if (score === 0 && topScore === 0) {
        newState.message = "";
      } else if (score !== 0 && topScore > 0) {
        newState.message = "correct";
      } else {
        newState.message = "incorrect";
      }


      if (score !== this.props.score || this.state.message !== newState.message) {
        this.setState(newState);
      }
  
    }

    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
          return "Boom! You got it!";
        case "incorrect":
          return "Better Luck Next Time!";
        default:
          return "Click a sneaker to get started";
        }
    };

 
    render() {
        return(
          <li 
            // if the state.aniamtion = true, add the class from animate.css to trigger the animation,
            // also add the state.message as a class, which changes the color,
            // if aniamtion.state = false, remove the aniamte.css class and add the '.black' class
            className={` 
              gameMessage 
              ${this.state.animating? this.addAnimation(): ""}  
              ${this.state.animating? this.state.message: "black"}
            `}
            id={`${this.state.message}`}
            // set the animation state back to false after the classes are added
            onAnimationEnd={() => this.setState({ animating: false })} 
          >
            {this.renderMessage()}
          </li>  
        );
    }
}

export default GameStats;
