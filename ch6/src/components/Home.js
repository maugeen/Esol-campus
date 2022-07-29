import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "./UserContext";

export default function Home() {
    const user = useContext(UserContext);

    return (
        <div className="home-wrapper">
            <div className="home-title">
                <h1>Bienvenido, {user.userLogin}!</h1>
            </div>
            <div>
                <button><Link to="/Login">Ingresar</Link></button>
                <button><Link to="/Register">Regístrese aquí</Link></button>
            </div>
        </div>
    )
}