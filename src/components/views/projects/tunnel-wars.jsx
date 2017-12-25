import React, { Component } from 'react';
import { Container, Grid, Image, Form, List, Icon, Modal, Embed } from 'semantic-ui-react';

export default class TunnelWars extends Component {
  render() {
    return (
      <Modal.Content image scrolling>
        <Image src='/media/img/tunnel_wars_ai_explained.png' style={{height:400}}/>
        <Modal.Description>
          <p>
            <b> What: </b>
            Tunnel Wars is a web game developed by Gabe Montague. It is a two player
            game in which players dig through tunnels and combat with spawning weapons.
            Gabe and Brandon developed a complex artificial intelligence that can play
            a human in tunnel wars.  Watch it in action on <a href="https://www.youtube.com/watch?v=I9_7TMQvlXo" target="_blank">youtube</a>.
          </p>
          <p>
            <b> Technology: </b>
            <ul>
              <li>Developed in Unity.</li>
              <li> Game logic and learning code written in C#. </li>
              <li> AI utilizes a combination of QLearning and adversarial search. </li>
            </ul>
          </p>
          <p>
            <b> Stage: </b>
            Live and available <a href='http://tunnelwars.com/' target="_blank">here</a>
          </p>
          <p>
            <b> Github: </b>
            <a href='https://github.com/montaguegabe/tunnelwars-ai' target="_blank">AI repository</a>
          </p>
        </Modal.Description>
      </Modal.Content>
    );
  }
}
