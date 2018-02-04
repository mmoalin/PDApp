import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectTask from '../actions/index';
import Contactsboard from './contactsDashboard';

class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }
  renderItems(items){
      console.log(items);
    return items.map(item =>
      <tr>
        <td onClick={() => this.props.selectTask(item)}>{item.content}</td>
      </tr>
      );
  }
  renderSection(title, items) {
    return (
      <div className="container " style={{float:"left", width: "80%"}}>
      <table className="table">
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
    console.log(this.props);
    console.log(this.props.projects);
    return (
      <div>
        <div className= "container" style={ {float: "left"}}>
        <div className = "row">
         <div className = "col-sm-6">
           {this.renderSection("Tasks", this.props.tasks)}
           {this.renderSection("Projects", this.props.projects)}
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
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectTask: selectTask }, dispatch);
}
function mapStateToProps(state){
  return{
    tasks: state.tasks,
    projects: state.projects
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard);
