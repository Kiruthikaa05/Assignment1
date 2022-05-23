import React,{Component} from "react";

class Login extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
      }
    }
    handleChange=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    
    handleSubmit=(event)=>{
        alert(`${this.state.username},You have successfully Logged In!`)
    }
    render(){
      
        return(
            <form onSubmit={this.handleSubmit}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <center> <div><h1>Login</h1></div>
                <div className="appform">
                    <lable>Username</lable>
                    <input type='text' value={this.state.username} onChange={this.handleChange}/><br/><br/>

                    <lable>Password</lable>
                    <input type='password'/><br/><br/>
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={(event)=>{
        alert(`Login Cancelled!`)
    }} >Cancel</button>
    <br /> </center>
            </form>
        )}
}
export default Login