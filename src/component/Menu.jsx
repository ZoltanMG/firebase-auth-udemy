import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseconfig';

const Menu = () => {
    const historial = useHistory()
    const [usuario, setUsuario] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email);
                console.log(user.email);
            }
        });
    }, []);

    const cerrarSession = () => {
        auth.signOut()
        setUsuario(null)
        historial.push('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li>
                        {
                            !usuario ?
                                (
                                    <Link className="nav-link" to="/Login">Login</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }

                    </li>
                    <li>
                        <Link className="nav-link" to="/Admin">Admin</Link>
                    </li>
                </ul>
                {
                    usuario ?
                        (
                            <button
                                onClick={cerrarSession}
                                className="btn btn-danger"
                            >
                                Cerrar sesión
                            </button>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </nav>
        </div>
    );
}

export default Menu;
