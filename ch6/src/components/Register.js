import React, { useState } from "react";
import { Navigate } from "react-router-dom";


import { setUser, getUsers } from "../services/UserServices";
import RegisterValidate from "./RegisterValidate";



export default function Register() {
    const [redirect, setRedirect] = useState(false);
    const [errorRedirect, setErrorRedirect] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = {
        username,
        email,
        password,
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await getUsers();
        try {
            RegisterValidate(user, data);
            await setUser(user);
            setRedirect(true);
            alert("Registro exitoso");
        } catch (event) {
            alert(event.message);
            setErrorRedirect(true);
            return;
        }
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="register-wrapper">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="username">
                        <p>Nombre de usuario</p>
                        <input
                            type="text"
                            placeholder="Usuario"
                            onChange={(event) => setUsername(event.target.value)}
                            value={username}
                            required
                        />
                    </label>
                    <label htmlFor="email">
                        <p>Email</p>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <label htmlFor="password">
                        <p>Contraseña</p>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            required
                        />
                    </label>
                </fieldset>
                <button type="submit">Regístrese</button>
            </form>
            {redirect && <Navigate to="/login" replace />}
            {errorRedirect && <Navigate to="/" replace />}
        </div>
    )
}