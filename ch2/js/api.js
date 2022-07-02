const url1 = "https://jsonplaceholder.typicode.com/users"
const url2 = "https://jsonplaceholder.typicode.com/users/1/albums"

// Se definen 2 formas de obtener los datos de la URL solicitada


// **Usando promesas** 
const promiseWay = async(url) => {
    return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

// **Con async await**
const asyncWay = async(url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);    
}
}

// Función para la obtención del array de usuarios con los datos solicitados.

const getUser = async (users) => { 
  var data = await users(url1)
  console.log(arrayFinal(data))
}

const arrayFinal = (data) => {
        const array = []
            for (let i = 0; i < data.length; i++) {
                const { id, name, username, email, address: { street, suite, city, geo: { lng } }, website, company } = data[i]

                const dataFiltered = {
                    id: id,
                    name: name,
                    username: username,
                    email: email,
                    address: {
                        street: street,
                        suite: suite,
                        city: city,
                        geo: {
                            lng: lng,
                        }
                    },
                    website: website,
                    company: company
                }
                array.push(dataFiltered)
            }
         return array
        
}

//Impresión por consola con ambos métodos
getUser(promiseWay);
getUser(asyncWay);


// Función para la obtención del array de usuarios con los datos solicitados.
const getAlbums = async (...parameter) => {
    let [id, al] = parameter
    var data = await al(url2)
    let albums = [...data];
    let albumFiltered = filterId(id, albums)
    console.log(albumFiltered);
}

let filterId = (...music) => {
    let [id, albums] = music
    return albums.filter(list => list.id === id);
}

//Impresión por consola con ambos métodos (ejemplo)
 getAlbums(2,promiseWay);
 getAlbums(3,asyncWay);  