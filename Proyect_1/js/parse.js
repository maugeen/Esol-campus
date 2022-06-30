const button = document.querySelector("button"); 

let json = {}

const parseFunction = () => { 
   
    const textarea = document.querySelector("textarea").value;

    json = new Function("return" + textarea)() // Función que convierte el string dado en objeto (json).
    console.log("Se ha convertido correctamente")
    console.log(json);
    console.log(json.first_prop);
    console.log(json.second_prop);
    console.log(json.third_prop);
    console.log(json.forth_prop);
    console.log(json.fifth_prop);

}
// console.log para ver las claves
// console.log para ver las claves del objeto convertido por consola.


button.addEventListener("click", parseFunction);