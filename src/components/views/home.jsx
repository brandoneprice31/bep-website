import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Container, Grid, Image, Form, List, Icon, Message, Loader } from 'semantic-ui-react';
import $ from 'jquery';

import ProjectDisplay from './project-display';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formMessage: '',
      sending: false
    }
  }

  componentDidMount() {
    browserHistory.push('/');
  }

  render() {
    var projects = [
      [
        {
          name: 'Chatter',
          img: '/media/img/chatter.png',
          id:'chatter'
        },
        {
          name: 'Kangaroo',
          img: '/media/img/kangaroo.jpg',
          id:'kangaroo'
        },
        {
          name: 'Tunnel Wars AI',
          img: '/media/img/tunnel_wars.jpg',
          id:'tunnel-wars'
        }
      ],
      [
        {
          name: 'Snake',
          img: '/media/img/snake.png',
          id:'snake'
        },
        {
          name: 'Climb',
          img: '/media/img/climb.png',
          id:'climb'
        },
        {
          name: 'Checkers / Tic-Tac-Toe AI',
          img: '/media/img/checkers.jpg',
          id:'checkers'
        }
      ]
    ]

    var message = (
      <Message id='formMessage' error hidden={this.state.formMessage == '' } content={this.state.formMessage}/>
    );
    var loader = (<Loader style={{position:'relative', left:120, top:-32}} />);

    if (this.state.formMessage == 'Sent!') {
      message = (
        <Message id='formMessage' hidden={this.state.formMessage == '' } content={this.state.formMessage}/>
      );
    }

    if (this.state.sending) {
      loader = (<Loader active style={{position:'relative', left:120, top:-32}} />);
    }


    return (
      <Container style={{maxWidth:800}} id='home'>
        <Grid centered style={{position:'relative', top:20}}>
          <Grid.Row>
            <Grid centered>
              <Grid.Row>
                <Image src='/media/img/brandon-price-1.jpg' size='medium' rounded style={{height:300}} href='/'/>
              </Grid.Row>
              <Grid.Row>
                <Container fluid>
                  <Grid centered>
                    <Grid.Row style={{height:40}}>
                      <h1>
                        Brandon Price
                      </h1>
                    </Grid.Row>
                    <Grid.Row>
                        Software Engineer, Harvard Grad, & Track Athlete
                    </Grid.Row>
                  </Grid>
                </Container>
              </Grid.Row>
            </Grid>
          </Grid.Row>
          <Grid.Row>
            <ProjectDisplay  projects={projects} />
          </Grid.Row>
          <Grid.Row>
            <Container textAlign='left' style={{width:500, position:'relative', top:30}}>
              {message}
              <Form onSubmit={() => this.contactSubmitted()}>
                <h2>
                  Contact
                </h2>
                <Form.Group widths='equal'>
                  <Form.Input id='nameInput' label='Name' placeholder='enter name..' />
                  <Form.Input id='emailInput' label='Email' placeholder='enter email..' />
                </Form.Group>
                <Form.TextArea id='textInput' placeholder='send a message to Brandon..' style={{ minHeight: 100, maxHeight:100 }}/>
                <Form.Button>Submit</Form.Button>
                {loader}
              </Form>
            </Container>
          </Grid.Row>
          <Grid.Row>
            <Container style={{position:'relative', top:50, height:40}}>
              <Grid>
                <Grid.Row centered>
                  <List horizontal size='massive'>
                    <List.Item icon='facebook square' href='https://facebook.com/brandoneprice31'/>
                    <List.Item icon='instagram' href='https://instagram.com/brandoneprice31'/>
                    <List.Item icon='linkedin square' href='https://www.linkedin.com/in/brandoneprice31/'/>
                    <List.Item icon='github square' href='https://github.com/brandoneprice31'/>
                    <List.Item icon='youtube square' href='https://www.youtube.com/channel/UCeCUFieutuF0Uk_KG73Q-OA'/>
                  </List>
                </Grid.Row>
              </Grid>
            </Container>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

  contactSubmitted() {
    const name = document.getElementById('nameInput');
    const email = document.getElementById('emailInput');
    const text = document.getElementById('textInput');
    const formMessage = document.getElementById('formMessage');

    if (name.value == '' || email.value == '' || text.value == '') {
      this.setState({
        formMessage: 'Please fill all fields.'
      });
      return;
    }

    this.setState({
      formMessage: '',
      sending: true
    });

    $.ajax({
      type: 'POST',
      url:  '/contact',
      data: { name: name.value, email: email.value, text: text.value },
      dataType: 'json',
      beforeSend: function(x) {
        if (x && x.overrideMimeType) {
          x.overrideMimeType("application/j-son;charset=UTF-8");
        }
      },
      error: function(data) {
        if (data.status != 200) {
          this.setState({
            formMessage: 'Error sending message.',
            sending: false
          });
          return;
        }

        name.value = '';
        email.value = '';
        text.value = '';
        this.setState({
          formMessage: 'Sent!',
          sending: false
        });
      }.bind(this)
    });
  }
}
