import React , { Component} from 'react';

class About extends Component {
    render(){
        return(
            <div className="about-div">
                <h1>About Me</h1>
                <hr/>
                <div className="about-content">
                <p> I am a dependable person who is great at time management.I am able to handle multiple tasks on a daily basis.
 I use a creative approach to solve the problems.
  I am always energetic and eager to learn new skills.
  <br/>
  <br/>
  I am looking for an opportunity which will boost my technical skills and give me direction to fullfill my career goals.
                        </p>


                </div>
              
                <img src={process.env.PUBLIC_URL+"/images/pic.jpeg"}
                alt="me"
                className="my-image"
                />
            </div>
        )
    }
}

export default About;