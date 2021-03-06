import React, {Component} from 'react';

class RegisterForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
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
          <div />
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
        {this.renderInput("Username", "userName", "text", this.state.userName, this.handleInputChange)}
        <br/>
        {this.renderInput("Password", "password", "password", this.state.password, this.handleInputChange)}
        <br/>
        {this.renderInput("Email", "email", "text", this.state.Email, this.handleInputChange)}
        <br/>
        {this.renderInput("Usual wake up time", "uwut", "text", this.state.uwut, this.handleInputChange)}
        <br/>
        <label>
          <b>Most productive in the:
          </b> <div />
            <input
              name="productive"
              type="radio"
              value="morning"
              onChange={this.handleInputChange}>
               <span style={{padding:"0 6px 0 0"}} /> Morning
            </input>
            <span style={{padding:"0 6px 0 0"}} />
            <input
              name="productive"
              type="radio"
              value="evening"
              onChange={this.handleInputChange}>
              <span style={{padding:"0 6px 0 0"}} />
              Evening
            </input>
          <span style={{padding:"0 6px 0 0"}} />
            <input
              name="productive"
              type="radio"
              value="notsure"
              onChange={this.handleInputChange}>
              <span style={{padding:"0 6px 0 0"}} />Not Sure
            </input>
        </label>
        <br/>
        <input type="submit" onClick={this.handleSubmit}> </input>
      </form>
    );
  }
}
export default RegisterForm;
