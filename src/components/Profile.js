import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl,HelpBlock} from 'react-bootstrap';
class Profile extends Component {

//initialize the 
constructor(props){
  super(props);
  this.state={githubUserInfo : {}}
}

//fetch the user profile info from github by setting the token and the url
componentDidMount(){
   let header = new Headers({"Content-Type":"application/json", "Authorization":"token 25b3c1c57d0a9342e1bed2c093c7191310cc0025"});

   return fetch('https://api.github.com/users/radhikapbhat', {
      method: 'GET',
      Headers : header
    })
    .then(response => response.json())
    .then(json => {
      this.setState({githubUserInfo: json}) //assign the fetched json data to githubUserInfo 
      //console.log(json)
    })
    .catch(error => console.log(error)); //error handling

}

  render() {
    return (
      //display the fetched data in a form.
      <div className="container">
          <p>Github Profile </p>
          <FormGroup>
          <ControlLabel>Full name: </ControlLabel>
             <FormControl type="text" value={this.state.githubUserInfo.name} placeholder="Enter text"
              /> <br/>
            <ControlLabel>HTML Url:</ControlLabel>
            <FormControl type="text" value={this.state.githubUserInfo.html_url} placeholder="Enter text"
              /><br/>
          <ControlLabel>Location: </ControlLabel>
            <FormControl type="text" value={this.state.githubUserInfo.location} placeholder="Enter text"
              /><br/>
            <ControlLabel>User Type:</ControlLabel>
            <FormControl type="text" value={this.state.githubUserInfo.type} placeholder="Enter text"
            />
          </FormGroup>
      </div>
    );
  }
}

export default Profile;
