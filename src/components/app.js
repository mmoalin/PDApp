import React, { Component } from 'react';
import MainDashboard from './mainDashboard';
import ContactsDashboard from './contactsDashboard';

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
        <MainDashboard projects={projects} tasks={tasks}/>
        <ContactsDashboard items={contacts} />
      </div>
    );
  }
}
