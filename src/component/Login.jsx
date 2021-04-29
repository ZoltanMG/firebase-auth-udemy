import React, { useState } from 'react';
import { auth } from '../firebaseconfig';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgError, setMsgError] = useState(null)

    const RegistrarUsuario = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, pass)
            .then(respuesta => {
                setMsgError(null)
                historial.push('/')
            })
            .catch(event => {
                if (event.code === 'auth/invalid-email') {
                    setMsgError('Formato de email incorrecto.')
                }
                if (event.code === 'auth/weak-password') {
                    setMsgError('La contraseña debe tener minimo 6 caracteres')
                }
            });
    }

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email, pass)
            .then((respuesta) => {
                setMsgError(null)
                historial.push('/')
            }
            )
            .catch((error) => {
                // auth/wrong-password
                // auth/user-not-found
                if (error.code === 'auth/wrong-password') {
                    setMsgError('Contraseña incorrecta')
                }
                if (error.code === 'auth/user-not-found') {
                    setMsgError('Correo no registrado')
                }
            })
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
                <button
                    onClick={LoginUsuario}
                    className="btn btn-success btn-block"
                >
                    Iniciar sesión
                </button>
                {
                    msgError !== null ?
                        (
                            <div className="alert alert-danger mt-2">
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
