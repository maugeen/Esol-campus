import React, { useReducer, createContext } from "react";
import { createUseStyles } from "react-jss";
import TripBuilder from "../TripBuilder/TripBuilder";
import TripSummary from "../TripSummary/TripSummary";


const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  }
});

export const TripContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

//Función que devuelve el botón CANCELAR
export default function TripMaker() {
  const classes = useStyles();
  const [trips, setTrip] = useReducer(reducer, []);
  return(
    <TripContext.Provider value={{trips, setTrip}}>
      <h1 className={classes.wrapper}>
      <button className={classes.button} onClick={(()=>{
                  trips.pop();
                  
              })}
              >CANCELAR</button>
      </h1>
      <TripBuilder />
      <TripSummary />
    </TripContext.Provider>
  )
}


 