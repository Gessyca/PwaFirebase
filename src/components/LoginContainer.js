import React, { useState } from 'react';
import { getProvider } from '../firebase'

const LoginContainer = (props) => {

    const [form, setForm] = useState({ email: '', password: '' })

    const handleClickChange = (e) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    const logarComGoogle = async (e) => {
        e.preventDefault()
        try {
            const firebase = props.firebaseInstance
            const result = await firebase.auth().signInWithPopup(getProvider());
            if (result) {
                localStorage.setItem('token', result.credential.accessToken);
                var user = result.user;
                console.log(user.displayName);
                console.log(user.email);
            } else {
                console.log('Nenhum dado encontrado')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div id="LoginContainer" className="inner-container">
                <div id="Header">
                    <img src="/assets/icon.png" alt="logo" />
                    <h1>Chatastrophe</h1>
                </div>
                <form onSubmit={() => handleSubmit}>
                    <p>Sign in or sign up by entering your email and password.</p>
                    <input name="email"
                        type="text"
                        onChange={handleClickChange}
                        value={form.email}
                        placeholder="Your email" />
                    <input name="password"
                        type="password"
                        onChange={handleClickChange}
                        value={form.password}
                        placeholder="Your password" />
                    <button className="red light" type="submit">Login</button>
                    <button className="red light" onClick={(e) => logarComGoogle(e)}>Login Google</button>
                </form>
            </div>
        </>
    )
}

export default LoginContainer