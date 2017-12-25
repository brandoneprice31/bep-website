import React, { Component } from 'react';
import { Container, Grid, Image, Card, Dimmer, Segment, Header, Button, Modal } from 'semantic-ui-react';

import Chatter from './projects/chatter';
import Climb from './projects/climb';
import Kangaroo from './projects/kangaroo';
import Snake from './projects/snake';
import TicTacToe from './projects/tic-tac-toe';
import TunnelWars from './projects/tunnel-wars';
import Newsroom from './projects/newsroom';

export default class ProjectModal extends Component {
  render() {
    var projectContent = null;

    switch (this.props.project.id) {
      case 'newsroom':
        projectContent = (
          <Newsroom />
        );
        break;
      case 'chatter':
        projectContent = (
          <Chatter />
        );
        break;
      case 'kangaroo':
        projectContent = (
          <Kangaroo />
        );
        break;
      case 'tunnel-wars':
        projectContent = (
          <TunnelWars />
        );
        break;
      case 'snake':
        projectContent = (
          <Snake />
        );
        break;
      case 'climb':
        projectContent = (
          <Climb />
        );
        break;
      case 'checkers':
        projectContent = (
          <TicTacToe />
        );
        break;
    }

    return (
      <Modal open={this.props.selected} onClose={() => this.props.closeModal()} closeIcon>
        <Modal.Header>{this.props.project.name}</Modal.Header>
        {projectContent}
      </Modal>
    );
  }
}
