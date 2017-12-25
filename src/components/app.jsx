import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
      <Container fluid>
        {this.props.children}
      </Container>
    );
  }
}
