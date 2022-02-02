import React from 'react';
import { CloseFunction } from "../../App/Interfaces";

interface Props {
    closeFunc: CloseFunction;
}

export function MenuLogIn({closeFunc}: Props): JSX.Element {

    const handleSubmit = function(event: any) {
        event.preventDefault();
        closeFunc(false);
    }

    const onClose = function() {
        closeFunc(false);
    };


    return(
        <div className="login-menu">
            <button id="login-close" onClick={onClose}>X</button>
            <h3 className="login-title">Welcome! Please log or sign in.</h3>
            <form>
                <label htmlFor="email">E-mail address</label>
                <input id="email" name="email" value="" type="email"></input>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" value="" type="password"></input>
                <input type="submit" value="Log In" id="submit" onClick={handleSubmit}></input>
            </form>
        </div>
    );
}