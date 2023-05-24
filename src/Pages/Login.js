import React, { useContext, useState } from "react";
import './Login.css';
import { Redirect } from "react-router-dom";
import CartContext from "../Components/contextStore/CartContext";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToStore, setRedirectToStore] = useState(false);
    const cartCtx = useContext(CartContext);

    const switchLogin = () => {
        setIsLogin((prevState) => !prevState);
    }

    const loginSubmitHandler = (event) => {
        event.preventDefault();

        if (isLogin) {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRdEN-tq8JiA6Df-JHdjWfa4LduHBo9fE', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.ok) {
                    setEmail('');
                    setPassword('');
                    setRedirectToStore(true);
                    return res.json();
                } else {
                    res.json().then(data => {
                        let errorMsg = data.error.message;
                        alert(errorMsg);
                    })
                }
            }).then(data => {
                cartCtx.setToken(data.idToken);
                console.log(data.idToken);
            });
        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRdEN-tq8JiA6Df-JHdjWfa4LduHBo9fE', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.ok) {
                    setEmail('');
                    setPassword('');
                    console.log('Account created successfully');
                } else {
                    res.json().then(data => {
                        let errorMsg = data.error.message;
                        alert(errorMsg);
                    })
                }
            });
        }
    }

    if (redirectToStore) {
        return <Redirect to="/store" />;
    }

    return (
        <React.Fragment>
            <div className='formDiv'>
                <h2>{isLogin ? 'login' : 'SignUp'}</h2>
                <form onSubmit={loginSubmitHandler}>
                    <label>email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='buttons'>
                        <button className='submitButton' type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
                        <button className='buttonButton' type='button' onClick={switchLogin}>{isLogin ? 'Create new account' : 'login with existing account'}</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;
