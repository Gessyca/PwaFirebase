import React, { useState } from 'react';

const LoginContainer = () => {
    const [form, setForm] = useState({ email: '', password: '' })

    const handleClickChange = (e) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <>
            <div id="LoginContainer" className="inner-container">
                <div id="Header">
                    <img src="/assets/icon.png" alt="logo" />
                    <h1>Chatastrophe</h1>
                </div>
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
        </>
    )
}

export default LoginContainer