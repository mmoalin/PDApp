import React, { Component } from 'react';
import MainDashboard from './mainDashboard';
import ContactsDashboard from './contactsDashboard';
import LoginForm from './loginform';
import RegisterForm from './registerform';

export default class App extends Component {
  render() {
    const projects = [
      "Taking over the world",
      "Taking over the world",
      "Taking over the world",
      "Taking over the world"
    ];
    const tasks = [
      "Dummy text for task",
      "Dummy text for task",
      "Dummy text for task",
      "Dummy text for task"
    ];
    const contacts = [
      "Mo Moalin",
      "Mo Moalin",
      "Mo Moalin",
    ];
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
