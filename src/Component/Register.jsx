import React,{Component} from "react";

class RegisterForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         Password:'',
         Email:'',
         fistname:'',
         lastname:'',
      }
    }
    handleUsernameChange=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handlePasswordChange=(event) =>{
        this.setState({
            Password:event.target.value
            })
    }
    handleEmailChange=(event) =>{
        this.setState({
            Email:event.target.value
            })
    }
    handlefirstnameChange=(event) =>{
        this.setState({
            firstname:event.target.value
        })
    }
    handlelastnameChange=(event) =>{
        this.setState({
            lastname:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username},You have successfully registered!`)
    }
    render(){
        return(
            <center>
            <form  id='reg 'onSubmit={this.handleSubmit}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br /><br /><br /><br/><br/><br/><br/><br/>
                <div className="appform">
                    <h1>Registeration</h1>
                    <lable>Firstname</lable>
                    <input type='text' value={this.state.Firstname} onChange={this.handlefirstnameChange}/><br/><br/>

                    <lable>Lastname</lable>
                    <input type='text' value={this.state.Lastname} onChange={this.handlelastnameChange}/><br/><br/>
                    <lable>EmailId</lable>
                    <input type='email' value={this.state.Email} onChange={this.handleEmailChange}/><br/><br/>


                    <lable>Username</lable>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/><br/><br/>

                    <lable>Password</lable>
                    <input type='password' value={this.state.PhoneNumber} onChange={this.handlePhoneNumberChange}/><br/><br/>

                    
                    
                  

                </div>
                <button type="submit">Register</button>
            </form></center>
        )}
}
export default RegisterForm