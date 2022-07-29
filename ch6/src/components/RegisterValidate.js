export default function RegisterValidate(user, data) {
    for(let element of data){
        if(element.email === user.email){
            throw new Error("El email ya existe");
        } else if (element.username === user.username) {
            throw new Error("El usuario ya existe");
        }
    }
}