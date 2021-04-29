import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseconfig';


const Inicio = () => {
    const [usuario, setUsuario] = useState(null)
        useEffect(() => {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    setUsuario(user.email);
                }
            });
        }, []);
    return (
        <div>
            <h1>Hola!</h1>
            {
                usuario?
                (
                    <p>Usted ha iniciado sesión como {usuario}</p>
                    )
                    :
                    (
                        
                        <p>Usted aún no ha iniciado sesión</p>
                )
            }
        </div>
    );
}

export default Inicio;
