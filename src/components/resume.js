import React , { Component} from 'react';


class Resume extends Component {
    render(){
        return(
            <div className="resume-body">
                <h1>My Resume</h1>
                <hr/>
                <img 
                src={process.env.PUBLIC_URL+"/images/final.jpeg"}
                alt="resume"
                className="resume-image"
                />
                
                
            </div>
        )
    }
}

export default Resume;