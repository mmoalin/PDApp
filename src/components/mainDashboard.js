import React, { Component } from 'react';
import Contactsboard from './contactsDashboard';

export default class MainDashboard extends Component {
  renderItems(items){
    return items.map(item =>
      <tr>
        <td>{item}</td>
      </tr>
      );
  }
  renderSection(title, items) {
    return (
      <div className="container ">
      <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">{title}</th>
        </tr>
        </thead>
          <tbody>
          {this.renderItems(items)}
        </tbody>
      </table>
    </div>
  );
  }
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
    return (
      <div>
        <div className= "container" style={ {float: "left"}}>
        <div className = "row">
         <div className = "col-sm-6">
           {this.renderSection("Tasks", tasks)}
           {this.renderSection("Projects", projects)}
         </div>
         <div className = "col-sm-6">
            <Contactsboard />
         </div>
        </div>
      </div>

    </div>
    );
  }
}
