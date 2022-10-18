import { useState } from "react";
// Using ES6 modules

// import { APP_CLIENT_ID, USER_POOL_ID} from "../some_constants";

// // Using ES6 modules
// import 'cross-fetch/polyfill';
// //https://github.com/amazon-archives/amazon-cognito-auth-js/issues/39
// import AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export default function Header(props) {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [email, setEmail] = useState("");
    let [emailRegister, setEmailRegister] = useState("");
    let [password, setPassword] = useState("");
    let [passwordRegister, setPasswordRegister] = useState("");

    function handleLogin() {

    }

    function handleRegister() {
        console.log("register", emailRegister, passwordRegister);
        // var poolData = {
        //     UserPoolId: USER_POOL_ID, // Your user pool id here
        //     ClientId: APP_CLIENT_ID, // Your client id here
        // };
        // var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        
        // var attributeList = [];
        
        // var dataEmail = {
        //     Name: 'email',
        //     Value: emailRegister,
        // };
        
        // var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        
        // attributeList.push(attributeEmail);
        // //email registration    
        // userPool.signUp("", passwordRegister, attributeList, null, function(
        //     err,
        //     result
        // ) {
        //     if (err) {
        //         alert(err.message || JSON.stringify(err));
        //         return;
        //     }
        //     var cognitoUser = result.user;
        //     console.log('user name is ' + cognitoUser.getUsername());
        // });
    }

    let loginElement;
    if (!isLoggedIn) {
        loginElement = <div>
            <form onSubmit={e => {
            e.preventDefault();
            handleLogin();
        }}>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} name="" id="" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="" id="" />
            <input type="submit" value="login" />
        </form>
        <form onSubmit={e => {
            e.preventDefault();
            handleRegister();
        }}>
            <input type="text" value={emailRegister} onChange={e => setEmailRegister(e.target.value)} name="" id="" />
            <input type="password" value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)}  name="" id="" />
            <input type="submit" value="register" />
        </form>
            </div>
    }
    else {
        loginElement = <div>Profile</div>
    }

    return (<header>
        <div className="logo"><a href="/">Some</a></div>
        {loginElement}
        
    </header>);
}