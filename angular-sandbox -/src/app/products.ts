export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string 
}

export const products: Array<Product> = [
    {
        id: 1,
        name: "Smartphone XL",
        price: 950,
        description: "Smartphone con pantalla grande",
        image: "../assets/smartxl.jpg"
    },
    {
        id: 2,
        name: "Smartphone Mini",
        price: 350,
        description: "Smartphone con buena cámara",
        image: "../assets/smartmini.jpg"
    },
    {
        id: 3,
        name: "Smartphone Standard",
        price: 600,
        description: "",
        image: "../assets/smartstandard.jpg"
    },
]