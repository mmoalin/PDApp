import React, { Component } from 'react';

export default class Contactsboard extends Component {
  renderOptions(){
    return(
      <div className="container myOptions" style={{float:"left"}}>
        <button>Send Task</button>
        <button>Add to group</button>
        <button>Delete</button>
      </div>
      );
  }
  renderItems(items){
    return items.map(item =>
      <tr>
        <td>{item}</td>
      </tr>
      );
  }
  renderMain(items) {
    return (
      <div className="container myCol" style={{float:"left"}}>
      <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Contacts</th>
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
    const { items } = this.props;
    return (
      <div>
      {this.renderMain(items)}
      {this.renderOptions()}
      </div>
    );
  }
}
