import React, { Component } from 'react';
import { Container, Grid, Image, Form, List, Icon, Modal } from 'semantic-ui-react';

export default class Kangaroo extends Component {
  render() {
    return (
      <Modal.Content image scrolling>
        <Image spaced src='/media/img/kangaroo_screenshot_1.png' style={{height:400}}/>
        <Image spaced src='/media/img/kangaroo_screenshot_2.png' style={{height:400}}/>
        <Modal.Description>
          <p>
            <b> What: </b>
            Kangaroo makes carpooling simple and affordable.  Drivers use the app to
            pick up commuters on their way to and from places.  Essentially it is an Uber
            for drivers already on their way.
          </p>
          <p>
            <b> Stage: </b>
            in development
          </p>
          <p>
            <b> Github: </b>
            <a href='https://github.com/brandoneprice31/kangaroo-ios' target="_blank">iOS frontend</a> and <a href='https://github.com/brandoneprice31/kangaroo-backend' target="_blank">api backend</a>
          </p>
        </Modal.Description>
      </Modal.Content>
    );
  }
}
