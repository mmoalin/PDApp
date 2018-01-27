import React, {Component} from 'react';

class TaskCreate extends Component{
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      ownCalendar: "",
      selectedOption: "",
      email: "",
      uwut: "",

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }
  renderInput(label, inputName, type, val, onChange){
    return(
        <label>
          <b>{label}:</b>
          <span style={{padding:"0 5px 0 0"}} />
          <input
            name={inputName}
            type={type}
            value={val}
            onChange={onChange} />
        </label>
    )
  }
  render(){
    return (
      <form>
        {this.renderInput("Title", "taskName", "text", this.state.taskName, this.handleInputChange)}
        <br/>
        <label>
          <b>Schedule in :</b>
          <div />
            <input
              name="Calendar"
              type="radio"
              value="ownCalendar"
              onChange={this.handleInputChange}>
              <span style={{padding:"0 3% 0 0"}} />
              Own Calendar
            </input>
            <span style={{padding:"0 3% 0 0"}} />
            <input
              name="Calendar"
              type="radio"
              value="otherCalendar"
              onChange={this.handleInputChange}>
              <span style={{padding:"0 3% 0 0"}} />
               Someone else's Calendar
              </input>
        </label>
        <br/>
        <div />
        <button type="submit" onClick={this.handleSubmit}> Automated Schedule  </button>
        <br/>
        <div />
        <button type="submit"  style={{margin:"15px 0 0 0"}} onClick={this.handleSubmit}> Schedule manually  </button>

      </form>
    );
  }
}
export default TaskCreate;
