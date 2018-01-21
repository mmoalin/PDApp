import React, { Component } from 'react';
import Contactsboard from './contactsDashboard';

export default class TaskInProgress extends Component {
    constructor() {
      super();
      this.state = {
        taskName: "Taking over the world",
        userInput: null
      };
      this.publish = this.publish.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    renderItems(items){
    return items.map(item =>
      <tr>
        <td>{item}</td>
      </tr>
      );
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    console.log( this.state.taskName, this.state.userInput );
  }
  render() {
    return (
      <div>
        <h2>{this.state.taskName}</h2>
        Notes:
        <br />
        <textarea
        name="userInput" rows="8" cols="80"
        placeholder="Enter topic here..."
        value= { this.state.userInput }
        onChange= { this.handleChange } >
        </textarea>
        <button value="Send" onClick={this.publish}>Save</button>
      </div>
    );
  }
}
