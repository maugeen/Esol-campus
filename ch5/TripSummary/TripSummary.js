import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { TripContext } from "../TripMaker/TripMaker";


const useStyles = createUseStyles({
    list: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontSize: 15,
        maxHeight: 40,
        "& li": {
            width: 100,
            padding: 3,
        }
    },
    wrapper: {
        borderTop: "black solid 1px",
        display: "flex",
        padding: "0 20px 0 20px",
    }
});

export default function TripSummary() {
    const classes = useStyles();
    const { trips } = useContext(TripContext)
    return (
        <div className={classes.wrapper}>
            <h2>Carro:</h2>
            <ul className={classes.list}>
                {trips.map((name) => (<li key={name}>{name}</li>))}
            </ul>
        </div>
    )
}