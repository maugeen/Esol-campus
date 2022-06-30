const button = document.querySelector("button"); 

let json = {}

const jason = () => { 
   
    const textarea = document.querySelector("textarea").value;

    const json = (new Function("return" + textarea))() // Función que convierte el string dado en objeto (json).

   // console.log(json);
    console.log(json.first_prop);
    // console.log(json.second_prop);
    // console.log(json.third_prop);
    // console.log(json.forth_prop);
    // console.log(json.fifth_prop);
}
// console.log para ver las claves del objeto convertido por consola.


button.addEventListener("click", jason);