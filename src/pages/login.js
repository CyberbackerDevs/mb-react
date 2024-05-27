// import React from "react";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

function Login(){

    useEffect(() => {
        document.title = 'Moneybacker Login | Cyberbacker'
    }, [])

    const nav = useNavigate();
    const [users, setPeople] = useState([
        {email: 'sample1@test.com', pass: 'test'}
    ]);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function process_login(e){
        e.preventDefault();
        console.log('process ~ '+email);



        nav('/dashboard');
    } 

    return (
        <div className="d-main-login-page">
            <div className="d-main-login-inner">
                <div className="d-ml-left">
                    <div className="d-ml-left-inner">
                        <h3>Sign In</h3>
                        <form onSubmit={process_login}>
                            <div className="d-ml-form-base">
                                <div className="d-ml-form-item">
                                    <label>Email</label>
                                    <input type="text" name="d-username" placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="d-ml-form-item">
                                    <label>Password</label>
                                    <input type="password" name="d-username" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                                </div>
                                <div className="d-ml-form-item">
                                    <input type="submit" name="d-username" value="Sign In"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-ml-right">
                    <div className="d-ml-right-inner">
                        <h3>Welcome Moneybacker</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
 
export default Login;
