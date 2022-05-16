function validarFormulario(formulario){
    var nombre = formulario.form[1].value;
    var password = formulario.form[2].value;
    var re_password = formulario.form[3].value;
    if(validarNombre(nombre)==false){
        alert("Debe ingresar un nombre");
    }
    else if(validarContrasenna(password, re_password) == false){
        alert("Las contraseñas deben coicidirse.");
    }
    else if(ochoDigitos(password, re_password) < 8){
        alert("Las contraseñas deben ser de ocho digitos.")
    }
    else
    {
        alert("formulario ok!")
    }
}

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
