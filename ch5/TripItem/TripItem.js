import React, { useContext } from "react";
import PropTypes from "react-jss";
import { createUseStyles } from "react-jss";
import { TripContext } from "../TripMaker/TripMaker";
import UserContext from "../User/User"

const useStyles = createUseStyles({
  button: {
    border: "grey solid 2px",
    cursor: "pointer",
    width: 150,
    height: 50,
    backgroundColor: "lightyellow",
    borderStyle: "outset ",
  },
  image: {
    width: 250,
    border: "black solid 1px",
  },
  wrapper: {
    border: "lightblue solid 1px",
    margin: 10,
    padding: 10,
    textAlign: "right",
    width: 250,
    height: 400,
    backgroundColor: "lightgrey"
  },
  text: {
    textAlign: "justify",
    fontSize: 14,
    fontFamily: "comic-sans"
  },
  price: {
    textAlign: "right",
    fontSize: 30,
    fontFamily: "arial",

  }

});

//Función que devuelve los botones de RESERVA, COMPRA y PROMO
export default function TripItem({ image, name, description, price, type }) {
  const classes = useStyles();
  const { setTrip } = useContext(TripContext);
  const user = useContext(UserContext);
  return (
    <div>
      <div className={classes.wrapper}>
        <img className={classes.image} src={image} alt={name} aria-label={name} />
        <h3>{name}</h3>
        <h5 className={classes.text}> {description}</h5>
        <h3 className={classes.price}>{price}</h3>
      </div>
      <button
        className={classes.button}
        onClick={() => { 
          switch (type) {
            case "RESERVAR": 
            alert(`Se ha enviado la reserva al mail ${user.email}`)
            break;
            case "COMPRAR": 
            setTrip(name) 
            alert(`Se han enviado los datos de su compra al mail ${user.email}`)
            break;
            default:
            setTrip(name)
            break;
          }}}>{type}
      </button>
    </div>
  )
};


TripItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
};