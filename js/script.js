const menuIcono=document.getElementById("toggle-menu");
const menuPrincipal=document.getElementById("main-menu");

menuIcono.addEventListener('click',()=>(
    menuPrincipal.classList.toggle("main-menu-show")
));

function mostrar_mensaje (){
    alert("Diste click en el menu amburgesa");
}