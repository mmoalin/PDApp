import React, {Component} from 'react';

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
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
        {this.renderInput("Name", "userName", "text", this.state.userName, this.handleInputChange)}
        <br/>
        {this.renderInput("Password", "password", "password", this.state.password, this.handleInputChange)}
        <br/>
        <input type="submit" onClick={this.handleSubmit}> </input>
      </form>
    );
  }
}
export default LoginForm;
