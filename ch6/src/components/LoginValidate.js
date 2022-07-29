export function loginValidate(usuario, password) {
    const user = usuario[0];
    if (usuario.length === 0) {
        throw new Error("No se encuentra usuario");
    } else if (user.password !== password) {
        throw new Error("La contraseña no es correcta");
    }
    return true;
}