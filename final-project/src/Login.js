import React, {Component} from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
        const {
            email,
            setEmail,
            password,
            setPassword,
            loginHandler,
            hasAccount,
            setHasAccount,
            signUpHandler
        } = props;
    }

    render() {

    return( 
        <div class="loginBg">
            <div>
                <h1></h1>
            </div>
        
        <div class="login">
            <h2>Sign-in Page</h2>
            <div>
                <label>Email Address </label>
                <input type = "text" value ={this.props.email} onChange = {(e) => this.props.setEmail(e.target.value)} placeholder="Email Address"></input>
            </div>
            <div>
                <label>Password </label>
                <input type = "password" value ={this.props.password} onChange = {(e) => this.props.setPassword(e.target.value)} placeholder="Password"></input>
            
            </div>
            <br/>
            {this.props.hasAccount ? (
                <div>
                    <button class="loginButton" onClick={this.props.loginHandler}>Login</button>
                    <p>Don't have an account? <span class="linkBox"><a onClick = {() => this.props.setHasAccount(!this.props.hasAccount)}>Create one.</a></span></p>
                </div>
            ):(
                <div>
                    <button class="loginButton" onClick={this.props.signUpHandler}>Sign up</button>
                    <p>Have an account? <span class="linkBox"><a onClick = {() => this.props.setHasAccount(!this.props.hasAccount)}>Login.</a></span></p>
                </div>
            )}
       </div>
       </div>
    );
    }
    
}

export default Login;