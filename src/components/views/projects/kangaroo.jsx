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
              Climb is a video game available on the app store. You are a little
              ball whose single objective in life is to fly into as many platforms
              as possible. Survival is easy, at first. Over time, you become more
              excited about your platform friends and begin to climb faster and faster,
              while the platforms grow smaller. All the while, you must avoid your
              spikeball brethren who want nothing more than to stop your glorious
              ascension. Additionally, you can collect coins to upgrade the color of
              your circular body as well as your spikeball kin.
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
