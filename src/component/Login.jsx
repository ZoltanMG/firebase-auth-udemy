import React, { useState } from 'react';
import { auth } from '../firebaseconfig';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgError, setMsgError] = useState(null)

    const RegistrarUsuario = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, pass)
            .then(respuesta => alert('Usuario registrado'))
            .catch(event => {
                if (event.code === 'auth/invalid-email') {
                    setMsgError('Formato de email incorrecto.')
                }
                if (event.code === 'auth/weak-password') {
                    setMsgError('La contraseña debe tener minimo 6 caracteres')
                }
            });
    }

    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegistrarUsuario} className="form-group">
                    <input
                        onChange={(event) => { setEmail(event.target.value) }}
                        className="form-control"
                        placeholder="Introduce el email"
                        type="email"
                    />
                    <input
                        onChange={(event) => { setPass(event.target.value) }}
                        className="form-control mt-4"
                        placeholder="Introduce la contraseña"
                        type="password"
                    />
                    <input
                        className="btn btn-dark btn-block mt-4"
                        type="submit"
                        value="Registrar Usuario"
                    />
                </form>
                {
                    msgError !== null ?
                        (
                            <div>
                                {msgError}
                            </div>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Login;
