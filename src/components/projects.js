import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                      <Card shadow={5} className="card" style={{ minWidth: '500px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'blue', height: '350px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-epwFI5D7fkPzU4LX3PqdZqTgkleHQb1n8Q&usqp=CAU) center / cover' }}>My ToDo App</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                         
                        </CardText>
                        <CardActions border>
                            <Button colored onClick= "https://anuradha1988.github.io/my-todo-app">GitHub</Button>
                            <Button colored></Button>
                            <Button colored></Button>
                        </CardActions>
                        <CardMenu style={{ color: 'blue' }}>
                            <IconButton name="share"  />
                        </CardMenu>
                    </Card>
                    
                    <Card shadow={5} style={{ minWidth: '500px', margin:'auto' }}>
                        <CardTitle style={{ color: 'blue', height: '350px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-epwFI5D7fkPzU4LX3PqdZqTgkleHQb1n8Q&usqp=CAU) center / cover' }}>My Portfolio Website</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                         
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored></Button>
                            <Button colored></Button>
                        </CardActions>
                        <CardMenu style={{ color: 'blue' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                    <Card shadow={5} style={{ minWidth: '500px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'blue', height: '350px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-epwFI5D7fkPzU4LX3PqdZqTgkleHQb1n8Q&usqp=CAU) center / cover' }}>React Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                         
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored></Button>
                            <Button colored></Button>
                        </CardActions>
                        <CardMenu style={{ color: 'blue' }}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                   
                    )

        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Angular Project...!</h1>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is Bootstrap Project...!</h1>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h1>This is MongoDB Project...!</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
    
                    <Grid>
                        <Cell Col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

            
            </div>
        );
    }
}

export default Projects;