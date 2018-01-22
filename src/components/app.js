import React, { Component } from 'react';
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
           <nav className="nav navbar-light">
             <ul>
               <li><Link to="/">MainDashboard</Link></li>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/register">Register</Link></li>
               <li><Link to="/taskcreate">Create a task</Link></li>
               <li><Link to="/taskinprogress">Task in Progress</Link></li>
             </ul>
           </nav>

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
