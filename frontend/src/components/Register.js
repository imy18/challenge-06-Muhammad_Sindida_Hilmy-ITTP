// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md 

import React, { useState } from 'react'
// berinteraksi dengan API
import axios from "axios";
// Setelah data tersubmit akan di redarect ke login
import { useHistory } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confmPassword, setConfmPassword] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Register = async(e) => {
        // Agar ketika di submit page tidak reload
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confmPassword: confmPassword,
                role: role
            });

            // Redaerect
            history.push("/");

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
                        <form onSubmit={Register} className="box">
                        <p className="has-text-centered">{msg}</p>
                            <div className="field mt-5">
                                <label className="label">Name</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Name"
                                    value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>
                            </div>

                    <       div className="field mt-5">
                                <label className="label">Email</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <label className="label">Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="******"
                                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <label className="label">Confirm Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="******"
                                    value={confmPassword} onChange={(e) => setConfmPassword(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <label className="label">Role</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Role"
                                    value={role} onChange={(e) => setRole(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Register