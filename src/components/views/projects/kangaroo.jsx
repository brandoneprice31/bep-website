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
            Live and available for download <a href='https://itunes.apple.com/us/app/climb-platforms/id1250427510?ls=1&mt=8' target="_blank">here</a>
          </p>
          <p>
            <b> Github: </b>
            <a href='https://github.com/coprice/climb' target="_blank">iOS frontend</a> and <a href='https://github.com/brandoneprice31/climb-backend' target="_blank">api backend</a>
          </p>
        </Modal.Description>
      </Modal.Content>
    );
  }
}
