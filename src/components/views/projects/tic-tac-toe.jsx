import React, { Component } from 'react';
import { Container, Grid, Image, Form, List, Icon, Modal } from 'semantic-ui-react';

export default class TicTacToe extends Component {
  render() {
    return (
      <Modal.Content image scrolling>
        <Image src='/media/img/tic-tac-toe-2.png' style={{height:400}}/>
        <Modal.Description>
          <p>
            <b> What: </b>
              I created my Tic-Tac-Toe and Checkers Artificial Intelligence for my
              final project in Computer Science 51 at Harvard.  It utilizes a Q-Learning
              algorithm in order to learn how to play both tic-tac-toe and checkers.
              After simulating thousands of games against itself, the AI became unbeatable
              in tic-tac-toe and pretty good at checkers.  Watch it in action <a href='https://www.youtube.com/watch?v=k5o5nmkQPhs' target="_blank">here</a>.
          </p>
          <p>
            <b> Technology: </b>
            Python 2.7, TKinter, Python Pickle Library
          </p>
          <p>
            <b> Github: </b>
            <a href='https://github.com/brandoneprice31/tictactoe-checkers-ai' target="_blank">download and play here</a>
          </p>
        </Modal.Description>
      </Modal.Content>
    );
  }
}
