import React, { Component } from 'react';
import { Container, Grid, Image, Card, Dimmer, Segment, Header, Button, Modal } from 'semantic-ui-react';

import ProjectModal from './project-modal';

export default class ProjectDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects
    };
  }

  render() {
    return (
      <Grid stackable centered style={{maxWidth:800}}>
        {
          this.state.projects.map(function (row, i) {
            return (
              <Grid.Row key={i} centered columns={3} style={{position:'relative', left:"2%"}}>
                {
                  row.map(function (project, j) {
                    return (
                      <Grid.Column
                        key={j}
                        onMouseEnter={() => this.mouseOverProject(i, j)}
                        onMouseLeave={() => this.mouseOutProject(i, j)}
                        onClick={() => this.onClickProject(i, j)}>
                        <Grid centered style={{width:"100%", height:"100%"}}>
                          <Grid.Row>
                            <Dimmer.Dimmable as={Image} blurring dimmed={project.active}>
                              <Dimmer active={project.active} inverted>
                                <h1 style={{color:'black', fontSize:20}}>
                                  {project.name}
                                </h1>
                              </Dimmer>
                              <Card raised>
                                <Image src={project.img} size='medium'/>
                              </Card>
                            </Dimmer.Dimmable>
                            <ProjectModal project={project} selected={project.selected} closeModal={() => this.handleClose(i, j)} />
                          </Grid.Row>
                        </Grid>
                      </Grid.Column>
                    );
                  }.bind(this).bind(i))
                }
              </Grid.Row>
            );
          }.bind(this))
        }
      </Grid>
    );
  }

  mouseOverProject(i, j) {
    var newProjects = this.state.projects;
    newProjects[i][j].active = true;

    this.setState({
      projects: newProjects
    })
  }

  mouseOutProject(i, j) {
    var newProjects = this.state.projects;
    newProjects[i][j].active = false;

    this.setState({
      projects: newProjects
    })
  }

  onClickProject(i, j) {
    var newProjects = this.state.projects;
    newProjects[i][j].selected = true;

    this.setState({
      projects: newProjects
    })
  }

  handleClose(i, j) {
    var newProjects = this.state.projects;
    newProjects[i][j].selected = false;

    this.setState({
      projects: newProjects
    })
  }
}
