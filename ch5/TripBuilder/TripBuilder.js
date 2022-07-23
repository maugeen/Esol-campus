import React from "react";
import { createUseStyles } from "react-jss";
import TripItem from "../TripItem/TripItem";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [0, 10],
    justifyContent: "center",
    
  }
});

const destinations = [
  {
    image: "img01.jpg",
    name: "Kyoto, Japón",
    description: "Kyoto es una mezcla de pasado y presente. Su futurista estación de ferrocarril y los modernos centros comerciales contrastan con tranquilos jardines de rocas karesansui y santuarios sintoístas centenarios.",
    type: "RESERVAR",
    price: "U$S 999",
  },
  {
    image: "img02.jpg",
    name: "Islas Egadas, Italia",
    description: "Las islas representan el área marina protegida más grande de Europa, y el fondo marino alberga extensas praderas sumergidas de pastos marinos.",
    type: "PROMO",
    price: "U$S 699",
  },
  {
    image: "img03.jpg",
    name: "Biskek, Kirguistán",
    description: "Kirguistán es uno de los países más amigables y bellos de Asia Central.",
    type: "COMPRAR",
    price: "U$S 1999"
  },
];

export default function TripBuilder() {
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
      {
        destinations.map(destination => (
          <TripItem
            key={destination.name}
            image={__dirname + "images/" + destination.image}
            name={destination.name}
            description={destination.description}
            type={destination.type}
            price= {destination.price}
          />
        ))
      }
    </div>
  )
}