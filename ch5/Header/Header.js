import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import UserContext from "../User/User";


const useStyles = createUseStyles({
    wrapper: {
        borderBottom: "black solid 1px",
        padding: [30, 15],
        textAlign: "right",
        margin: 10,

    },
    img: {
        float: "left",
        fontSize: 50,
        paddingLeft: 5
    },
    travel: {
        float: "left",
        fontSize: 20,
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 30,
        paddingLeft: 15

    }
})

export default function Header() {
    const user = useContext(UserContext);
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            Bienvenido {user.name}
            <div className={classes.img} role="img" aria-label="mapa">🗺 </div>
            <div className={classes.travel}>Viajando ando</div>
        </div>
    )
}

