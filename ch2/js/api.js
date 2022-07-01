const url1 = "https://jsonplaceholder.typicode.com/users"
const url2 = "https://jsonplaceholder.typicode.com/users/1/albums"

/* Usando promesas */
const promiseWay = async() => {
    return fetch(url1)
    .then(response => response.json())
    .then(data => console.log(data.response));
}

/* Con async await */
const asyncWay = async() => {
    try{
        const response = await fetch(url1);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);    
}console.log(response);
}
// console.log(response);
// console.log(promiseWay());

const getUser = async (users) => {
  var data = await users
    const arrayFinal = () => {
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
    console.log(data)
}

//console.log(getUser()) 
//console.log(getUser(promiseWay))
//console.log(getUser(asyncWay))





// const getUserByID = (id) => {
        //     return data.find((data) => data.id === id)
        // }
        // console.log(getUserByID(2))




//console.log(getUser())



// function deleteProps(array) {
//     arrayFinal.map((date) => {
//         const { phone, ...rest} = date
//         users = rest
//     })
// }
// console.log(deleteProps(arrayFinal));
