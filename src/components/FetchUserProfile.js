import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl,HelpBlock} from 'react-bootstrap';
class FetchUserProfile extends Component {

constructor(props){
  super(props);

  this.state={
     jsonList : []
    }
}

//fetch the user profile info from json-geenrator using a url
componentDidMount(){
  return fetch('http://www.json-generator.com/api/json/get/cqljlHEdCG?indent=2', {
      method: 'GET'     
    })
    .then(response => response.json())
    .then(json => {
      this.setState({jsonList: json}) //set the pulled json data to an array jsonList
    //  console.log(json)
    })
    .catch(error => console.log(error)); //error handling

}


  render() {
    return (
      //display the pulled data in a table
      <div className="container">
          <p>User details fron JSON generator</p>
          <table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
         {this.state.jsonList.map( item =>{
            return(       
              <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.company}</td>
              </tr>
              )
           })}
         </tbody>
         </table>
      </div>
    );
  }
}

export default FetchUserProfile;
