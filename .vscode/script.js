function validarContrasenna(password, repassword){
    if(password != repassword){
        return false;
    }
    else
    {
        alert("Las contraseñas no coinciden.")
        return true;
    }
}
function validarNombre(nombre){
    if(nombre == ''){
        alert("Debe ingresar un nombre")
        return false;
    }
    else
    {
        return true;
    }
}
function ochoDigitos(password, repassword){
    if(password || repassword < 8){
        alert("La contraseña deben ser de 8 digitos.")
        return true;
    }
    else
    {
        return false;
    }
}