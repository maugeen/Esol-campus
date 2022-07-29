import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { setPost } from "../services/PostServices";
import UserContext from "./UserContext";

export default function CreatePost() {
    const userContext = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [redirect, setRedirect] = useState(false);

    const post = {
        title,
        content,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPost(post);
        setRedirect(true);
        setTitle("");
        setContent("");
    }

    return (
        <div className="create-post-wrapper">
            <div>
                <h3> {userContext.userLogin}</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="title">
                        <p>Title</p>
                        <input
                            type="text"
                            onChange={(event) => setTitle(event.target.value)}
                            value={title}
                            placeholder="Título"
                            required
                        />
                    </label>
                    <label htmlFor="content">
                        <p>Content</p>
                        <textarea
                            type="text"
                            onChange={(event) => setContent(event.target.value)}
                            value={content}
                            placeholder="Escriba una historia"
                            required
                        />
                    </label>
                </fieldset>
                <button type="submit">Agregar post</button>
            </form>
            {redirect && <Navigate to="/AllPosts" replace />}
        </div>
    )
}