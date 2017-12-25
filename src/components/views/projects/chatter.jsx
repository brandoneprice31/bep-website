import React, { Component } from 'react';
import { Container, Grid, Image, Form, List, Icon, Modal, Header } from 'semantic-ui-react';

export default class Chatter extends Component {
  render() {
    return (
      <Modal.Content image scrolling>
        <Image src='/media/img/chatter-3.jpg' style={{height:400}}/>
        <Modal.Description>
          <p>
            <b> What: </b>
              Chatter is an encrypted messaging iOS app that allows users to communicate
              privately over the internet.  It works by establishing a connection with
              another user over bluetooth and swapping an encryption key.  This key is
              then used to encrypt and decrypt messages between these users.  Group messages
              are supported.
          </p>
          <p>
            <b> Technology Stack: </b>
            <ul>
              <li> iOS front-end: Swift, Core Bluetooth, APN Service (Push Notifications), AES-256 Encryption </li>
              <li> Server back-end: Python 3.6, Sanic, MongoDB, Docker, AWS EC2 </li>
            </ul>
          </p>
          <p>
            <b> Stage: </b>
            Live and available for download <a href='https://itunes.apple.com/us/app/chatter-secure-messenger/id1290342381?mt=8' target="_blank">here</a>
          </p>
          <p>
            <b> Github: </b>
            <a href='https://www.github.com/brandoneprice31/chatter-ios' target="_blank">iOS frontend</a> and <a href='https://www.github.com/brandoneprice31/chatter-api' target="_blank">api backend</a>
          </p>
        </Modal.Description>
      </Modal.Content>
    );
  }
}
