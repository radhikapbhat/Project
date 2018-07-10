import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl,HelpBlock} from 'react-bootstrap';
class Profile extends Component {

constructor(props){
  super(props);
  this.state={githubUserInfo : {}}
}

//fetch the user profile info from github by 
componentDidMount(){
   let header = new Headers({"Content-Type":"application/json", "Authorization":"token 25b3c1c57d0a9342e1bed2c093c7191310cc0025"});

   return fetch('https://api.github.com/users/radhikapbhat', {
      method: 'GET',
      Headers : header
    })
    .then(response => response.json())
    .then(json => {
      this.setState({githubUserInfo: json})
      console.log(json)
    })
    .catch(error => console.log(error));

}

updateValue(){

}

  render() {
    return (
      <div className="container">
          <p>Profile goes here</p>
          <FormGroup>
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl type="text" value={this.state.githubUserInfo.name} placeholder="Enter text"
              onChange={this.updateValue.bind(this)}
            />
           
          </FormGroup>
      </div>
    );
  }
}

export default Profile;
{}