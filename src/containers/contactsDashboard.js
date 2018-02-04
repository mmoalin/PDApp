import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contactsboard extends Component {
  onSendTask(){

  }
  onAddToGroup(){

  }
  onDeleteTask(){

  }
  renderOptions(){
    return(
      <div className="container col-sm-6 ">
        <div style={{margin:"10% 0 0 0 " }} >
          <button onClick={this.onSendTask}>Send Task</button><br />
          <button onClick={this.onAddToGroup}>Add to group</button><br />
          <button onClick={this.onDeleteTask}>Delete</button>
        </div>
      </div>
      );
  }//Tabs, one for contacts, another for groups.
  renderItems(items){
    return items.map(item =>
      <tr>
        <td>{item.content}</td>
      </tr>
      );
  }
  renderMain(items) {
    return (
      <div className="container myContactsMain col-sm-6">
      <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col" >Contacts</th>
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
    return (
      <div className="container">
        <div className="row">
          {this.renderMain(this.props.contacts)}
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    contacts: state.contacts,
  }
}
export default connect(mapStateToProps)(Contactsboard);
