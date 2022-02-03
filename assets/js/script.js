//Realizar transición de ampliar o reducir con un botón.
let ampliar= document.getElementById("ampliar");
let reducir= document.getElementById("reducir");
let cuadrado1= document.getElementById("cuadrado1");

ampliar.addEventListener("click", ()=>{
    cuadrado1.style.width="500px"
})

reducir.addEventListener("click", ()=>{
    cuadrado1.style.width="100px"
})

/*Una vez que se ejecutan estas funciones, la propiedad asignada
en CSS para cuadrado1:hover {} deja de funcionar.*/

//Transición de ampliar con hover pero en js.

cuadrado1.addEventListener("mouseover", ()=>{
    cuadrado1.style.width="500px"
})

cuadrado1.addEventListener("mouseout", ()=>{
    cuadrado1.style.width="100px"
})

//Cambiar posición de un elemento
let cuadrado2 = document.getElementById("cuadrado2");
let derecha = document.getElementById("derecha");
let abajo = document.getElementById("abajo")
let izquierda = document.getElementById("izquierda")
let arriba = document.getElementById("arriba")
//Mover a la derecha
derecha.addEventListener("click", ()=>{
    let actualLeft=window.getComputedStyle(cuadrado2).left;
    cuadrado2.style.left=parseInt(actualLeft)+100+"px";
})
//Mover hacia abajo
abajo.addEventListener("click", ()=>{
    let actualTop=window.getComputedStyle(cuadrado2).top;
    cuadrado2.style.top=parseInt(actualTop)+100+"px";
})
//Mover hacia izquierda
izquierda.addEventListener("click", ()=>{
    let actualLeft=window.getComputedStyle(cuadrado2).left;
    cuadrado2.style.left=parseInt(actualLeft)-100+"px";
})
//Mover hacia arriba
arriba.addEventListener("click", ()=>{
    let actualTop=window.getComputedStyle(cuadrado2).top;
    cuadrado2.style.top=parseInt(actualTop)-100+"px";
})
