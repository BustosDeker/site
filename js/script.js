var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function iniciarSesion(){
    x.style.left = "27px";
    y.style.right = "-350px";
    z.style.left = "0px";
}

function registrarse(){
    x.style.left = "-350px";
    y.style.right = "25px";
    z.style.left = "150px";
}

// Ver contraseñas

function mostrarContraseñaLogin(){
    var a = document.getElementById("logPassword");
    var b = document.getElementById("ojo");
    var c = document.getElementById("ojo-tachado");
    if(a.type === "password"){
        a.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    }else{
        a.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}

function mostrarContraseñaRegistro(){
    var d = document.getElementById("regPassword");
    var b = document.getElementById("ojo-2");
    var c = document.getElementById("ojo-tachado-2");
    if(d.type === "password"){
        d.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    }else{
        d.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}

