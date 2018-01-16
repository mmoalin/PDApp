import React, {Component} from 'react';

class LoginForm extends Component{
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
          {label}:
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
          Most productive in the:
            <input
              name="morning"
              type="radio"
              value="morning"
              onChange={this.handleInputChange}>
              Morning
            </input>
            <input
              name="evening"
              type="radio"
              value="evening"
              onChange={this.handleInputChange}>
              Evening
            </input>
              <input
                name="notsure"
                type="radio"
                value="notsure"
                onChange={this.handleInputChange}>
                NotSure
              </input>
        </label>
        <br/>
        <input type="submit" onClick={this.handleSubmit}> </input>
      </form>
    );
  }
}
export default LoginForm;
