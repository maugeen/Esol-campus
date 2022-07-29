import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserContext from "./UserContext";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AllPosts from "./AllPosts";
import CreatePost from "./CreatePost";
import NotFound from "./NotFound";

export default function ApiRouter() {
    const [userLogin, setUserLogin] = useState("Usuario desconocido");

    const setDefaultUser = () => {
        setUserLogin("Usuario desconocido");
    }

    return (
        <Router>
            <UserContext.Provider value={{ userLogin, setUserLogin, setDefaultUser }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/Register" element={<Register />} />
                    <Route exact path="/AllPosts" element={<AllPosts />} />
                    <Route exact path="/CreatePost" element={<CreatePost />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </UserContext.Provider>
        </Router>
    )
}