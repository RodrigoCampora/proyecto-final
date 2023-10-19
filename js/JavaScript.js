document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    window.location.href = "../index.html";
});

   // Datos de los planes con precios
   var planes = [
    {
        nombre: "Plan Standard",
        caracteristicas: ["Gratis", "Acceso a diversas herramientas", "Limitado"],
        precio: "$0/mes"
    },
    {
        nombre: "Plan Pro",
        caracteristicas: ["Acceso a herramientas profesionales", "Ilimitado", "Guardado en la nube"],
        precio: "$19.99/mes"
    },
    {
        nombre: "Plan Full",
        caracteristicas: ["Todas las herramientas"],
        precio: "$49.99/mes"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    
    const credenciales = [];

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;


        credenciales.push({ email, password });

        
        console.log("Credenciales almacenadas:");
        console.log(credenciales);

        
        loginForm.reset();
    });
});

var nombre = localStorage.getItem('nombre');

if (nombre) {
   
    var nombreUsuarioElement = document.getElementById('nombre-usuario');
    nombreUsuarioElement.textContent = nombre;
}