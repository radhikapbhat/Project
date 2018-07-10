import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Table }  from 'react-bootstrap';
import Profile from './Profile';
import FetchUserProfile from './FetchUserProfile';
import Map from './Map';

class App extends Component {

//set the default tab as profile
    constructor(props){
      super(props);
      this.state={ defaultTab: 'profile'}
    }


  render() {
    return (
      <div>
      //set the navigation bar using react bootstrap
           <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Sample project</a>
                </Navbar.Brand>
              </Navbar.Header>

              <Nav pullRight>
                <NavItem eventKey={1} href="#" onClick={() => this.setState({defaultTab: 'userdetails'})}>Users</NavItem>
                <NavItem eventKey={2} href="#" onClick={() => {this.setState({defaultTab: 'profile'})}}>Profile</NavItem>
                <NavItem eventKey={3} href="#" onClick={() => {this.setState({defaultTab: 'mapg'})}}>Google Map</NavItem>
              </Nav>
            </Navbar>
            // check for the click event and display the details based on the click event
            {this.state.defaultTab==='userdetails' ? <FetchUserProfile/> : false}
            {this.state.defaultTab==='profile' ? <Profile /> : false}
            {this.state.defaultTab==='mapg' ? <Map /> : false}
      </div> 
    );
  }
}

export default App;
