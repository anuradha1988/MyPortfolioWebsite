import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Anuradha Pandey</h2>
                        <img
                            
                            src={process.env.PUBLIC_URL+"/images/pic.jpeg"}
                            alt="avatar"
                            style={{ height: '250px' }}
                            className="contact-img"
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                    9084829317
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-fax" aria-hidden="true"></i>
                                    (05945)-269999
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    ranum7888@gmail.com
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true"></i>
                                        live:.cid.4621c1f925809986
                                        </ListItemContent>
                                </ListItem>
                            </List>


                        </div>


                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Contact;