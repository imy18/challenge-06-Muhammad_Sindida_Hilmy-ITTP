// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    
    const Auth = async(e) => {
        // Agar ketika di submit page tidak reload
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });

            // Redaerect
            history.push("/dashboard");
        } catch (error) {

            // Handle error
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
    
    <section className="hero hash-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form onSubmit={Auth} className="box">
                            <p className="has-text-centered">{msg}</p>
                            <div className="field mt-5">
                                <label className="label">Email or Username</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <label className="label">Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login