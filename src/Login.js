import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css" ;
import {auth,provider} from "./firebase" ;
import {actionTypes} from "./reducer" ;
import {useStateValue} from "./StateProvider" ;

function Login() {
    const[state , dispatch] = useStateValue() ;
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(err => alert(err.message)) 

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://classicrock995.com/wp-content/uploads/2020/11/Facebook-logo.png" />
                <img src="https://covington-oh.gov/wp-content/uploads/2020/12/Facebook-Logo.png" />
           
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

