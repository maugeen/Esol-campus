import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";


import { loginValidate } from "./LoginValidate";
import UserContext from "./UserContext";
import { getUser } from "../services/UserServices";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userFound, setUserFound] = useState(false);
    const userContext = useContext(UserContext);

    const user = {
        email,
        password,
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const usuario = await getUser(user.email);
        try {
            loginValidate(usuario, user.password);
            userContext.setUserLogin(usuario[0].username);
            setUserFound(true);
        } catch (event) {
            alert(event.message);
            return;
        }
        setEmail("");
        setPassword("");
    }

    return (
        <div className="login-wrapper">
            <h1>Ingresar</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
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
                <button type="submit">Ingresar</button>
            </form>
            {userFound && <Navigate to="/AllPosts" replace />}
        </div>
    )
}