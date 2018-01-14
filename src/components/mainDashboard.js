import React, { Component } from 'react';
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
      <div className="container myCol">
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
    const { projects, tasks } = this.props;
    return (
      <div  style={ {float: "left"}}>
      {this.renderSection("Tasks", tasks)}
      {this.renderSection("Projects", projects)}
      </div>
    );
  }
}
