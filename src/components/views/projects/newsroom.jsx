import React, { Component } from 'react';
import { Container, Grid, Image, Form, List, Icon, Modal, Header } from 'semantic-ui-react';

export default class Newsroom extends Component {
  render() {
    return (
      <Modal.Content image scrolling>
        <Image src='/media/img/newsroom-2.png' style={{height:300}}/>
        <Modal.Description>
          <p>
            <b> What: </b>
              Newsroom is a web application that allows you to read news articles,
              find other articles on the same topic, and comment on them.  I learned how to
              use React and Redux while building Newsroom.  It currently is live on the
              Chrome Store as an extension to your browser.
          </p>
          <p>
            <b> Technology Stack: </b>
            <ul>
              <li> Chrome front-end: React JS, Redux, Webpack, Semantic UI </li>
              <li> API back-end: <a href="https://newsapi.org/" target="_blank">News API</a>, <a href="https://github.com/codelucas/newspaper" target="_blank">Newspaper3k</a>, MongoDB, Python 3.6, Sanic, Docker, AWS ECS </li>
            </ul>
          </p>
          <p>
            <b> Stage: </b>
            live on the Chrome Store <a href="https://chrome.google.com/webstore/detail/newsroom/lkokbemmcgfgdlablbafpikiicpjiejj" target="_blank">here</a>
          </p>
          <p>
            <b> Github: </b>
            <a href='https://www.github.com/brandoneprice31/newsroom-chrome' target="_blank">chrome frontend</a> and <a href='https://www.github.com/brandoneprice31/newsroom-api' target="_blank">api backend</a>
          </p>
        </Modal.Description>
      </Modal.Content>
    );
  }
}
