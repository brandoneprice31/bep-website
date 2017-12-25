import React, { Component } from 'react';
import { Container, Grid, Image, Form, List, Icon, Modal } from 'semantic-ui-react';

export default class Snake extends Component {
  render() {
    return (
      <Modal.Content image scrolling>
        <Image src='/media/img/snake.jpg' style={{height:400}}/>
        <Modal.Description>
          <p>
            <b> What: </b>
            Snake was the first iOS app that I've ever made.  It is the classic
            Snake game featured originally on Nokia.  My iOS version allows user's
            to sign in on Facebook so that they can compare their highscores to their friend's.
          </p>
          <p>
            <b> Technology Stack: </b>
            <ul>
              <li> iOS front-end: Swift, Facebook SDK, Google Admob, SpriteKit </li>
              <li> Back-end: Python 3.6, MongoDB, Sanic Server, AWS ECS </li>
            </ul>
          </p>
          <p>
            <b> Stage: </b>
            Live and available for download <a href='https://itunes.apple.com/us/app/snake-professional/id1040358770?mt=8' target="_blank">here</a>
          </p>
          <p>
            <b> Github: </b>
            <a href='https://github.com/brandoneprice31/snake-ios' target="_blank">iOS frontend</a> and <a href='https://github.com/brandoneprice31/snake-api' target="_blank">api backend</a>
          </p>
        </Modal.Description>
      </Modal.Content>
    );
  }
}
