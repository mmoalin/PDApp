import React, { Component } from 'react';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import MainDashboard from './mainDashboard';
import ContactsDashboard from './contactsDashboard';
import Login from './loginform';
import TaskCreate from './taskCreate';
import TaskInProgress from './taskInProgress';
import Register from './registerform';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
     <div>
      <Router>
         <div>
         <Navbar>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="#home">PDA++</a>
             </Navbar.Brand>
           </Navbar.Header>
           <Nav>
             <NavItem eventKey={1} href="/">
               MainDashboard
             </NavItem>
             <NavItem eventKey={2} href="/login">
               Login
             </NavItem>
             <NavItem eventKey={2} href="/register">
               Register
             </NavItem>
             <NavItem eventKey={2} href="/taskcreate">
               Create a task
             </NavItem>
             <NavItem eventKey={2} href="/taskinprogress">
               Task in Progress
             </NavItem>
           </Nav>
         </Navbar>
           <hr/>
           <Switch>
           <Route exact path="/" component={MainDashboard}/>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           <Route path="/taskcreate" component={TaskCreate}/>
           <Route path="/taskinprogress" component={TaskInProgress}/>
           {this.props.children}
           </Switch>
         </div>
       </Router>
      </div>
    );
  }
}
