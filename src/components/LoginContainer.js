import React, { useState } from 'react';

const LoginContainer = (props) => {

    const [form, setForm] = useState({ email: '', password: '', error: '' })

    const handleClickChange = (e) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = form
        setForm({ email, password, error: '' })
        if (email && password) {
            const firebase = props.firebaseInstance
            try {
                const result = await firebase.auth().signInWithEmailAndPassword(email, password)
                login(result, email, password)
            } catch (error) {
                console.log(error)
                if (error.code === 'auth/user-not-found') {
                    singup(email, password)
                } else {
                    setForm({ email, password, error: 'Erro ao logar' })
                }
            }
        } else {
            setForm({ email, password, error: 'Preencha todos os campos' })
        }
    }

    function login(result, email, password) {
        if (result) {
            var user = result.user;
            console.log(user.displayName);
            console.log(user.email);
            props.setUsuarioLogado(user)
        } else {
            setForm({ email, password, error: 'Nenhum dado encontrado' })
        }
    }

    async function singup(email, password) {
        const firebase = props.firebaseInstance
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if(user){
                props.setUsuarioLogado(user)
            } else {
                setForm({ email, password, error: 'Não foi possível realizar o cadastro' })
            }
        } catch (error) {
            console.log(error)
            setForm({ email, password, error: 'Erro ao tentar realizar o cadastro' })
        }

    }

    // const logarComGoogle = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const firebase = props.firebaseInstance
    //         const result = await firebase.auth().signInWithPopup(getProvider());
    //         if (result) {
    //             localStorage.setItem('token', result.credential.accessToken);
    //             var user = result.user;
    //             console.log(user.displayName);
    //             console.log(user.email);
    //         } else {
    //             console.log('Nenhum dado encontrado')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            <div id="LoginContainer" className="inner-container">
                <div id="Header">
                    <img src="/assets/icon.png" alt="logo" />
                    <h1>Chatastrophe</h1>
                </div>
                <form onSubmit={handleSubmit} autoComplete="off">
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
                    <p className="error">{form.error}</p>
                    <button className="red light" type="submit">Login</button>
                    {/* <button className="red light" onClick={(e) => logarComGoogle(e)}>Login Google</button> */}
                </form>
            </div>
        </>
    )
}

export default LoginContainer