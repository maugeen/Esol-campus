import React, { useEffect, useReducer, useState, useContext } from "react";
import { Link } from "react-router-dom";


import Post from "./Post";
import { getPosts } from "../services/PostServices";
import UserContext from "./UserContext";

function reducer(state, item) {
    return [...state, item];
}

export default function AllPosts() {
    const [allPosts, setAllPosts] = useReducer(reducer, []);
    const [isCreated, setisCreated] = useState(true);
    const userContext = useContext(UserContext);

    useEffect(() => {
        const res = getPosts();
        res.then(data => {
            for (let post of data) {
                setAllPosts(post);
            }
            setisCreated(false);
        });
    }, [])

    if (isCreated) {
        return <h1>Cargando</h1>
    }

    return (
        <div className="all-posts-wrapper">
            {<Link to="/CreatePost"><button>Crear nueva entrada</button></Link>}
            {/* {<Link to="/"><button onClick={() => { userContext.setDefaultUser() }}>Log Out</button></Link>} */}
            <div>
                <h3>{userContext.userLogin}</h3>
            </div>
            <ul>
                {allPosts.map(post => (
                    <li key={post.id}>
                        <Post
                            id={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}