import React, { Component } from "react";
import MainContainer from "../MainContainer";
import ShoeCards from "../ShoeCards";
import Header2 from "../Header2";
import Header from "../Header";
import Footer from "../Footer";
import data from "../../data";


class Game extends Component {

    state = {
        data,
        score: 0,
        topScore: 0,
        message: "Try to click all images without repeating"
    };

    componentDidMount() {
        this.setState({ data: this.shuffleDeck(this.state.data) });
    }

    shuffleDeck = data => {
        let newData = data.sort(function(a, b){return 0.5 - Math.random()});
        return newData;
    };

    resetDeck = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleDeck(resetData);
      };

    correctGuess = newData => {
        let newScore = this.state.score;
        newScore++
        let newTopScore = Math.max(newScore, this.state.topScore);

        this.setState({
            data: this.shuffleDeck(newData),
            score: newScore,
            topScore: newTopScore,
        })
    }

    // restarts the game with fresh data
    incorrectGuess = newData => {
        this.setState({
            data: this.resetDeck(newData),
            score: 0
        })
    }


    shoeCardsClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
          if (item.id === id) {
            if (!item.clicked) {
              item.clicked = true;
              guessedCorrectly = true;
            }
          }
          return item;     
        });

        guessedCorrectly ? this.correctGuess(newData) : this.incorrectGuess(newData);
      };

    render() {
        return (
            <div>
                <Header score={this.state.score} topScore = {this.state.topScore} />
                <Header2 message={this.state.message} />
                <MainContainer>
                    {
                        this.state.data.map(item => (
                            <div>
                                <ShoeCards
                                    key={item.id}
                                    id={item.id} 
                                    image={item.image}
                                    clicked={item.clicked}
                                    handleClick={this.shoeCardsClick}
                                />      
                            </div>  
                        ))
                    }
                </MainContainer>
                <Footer />
            </div>
        );
    }
}

export default Game;
