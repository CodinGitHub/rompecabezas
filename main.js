let lugarVacio = false;
let audio = new Audio('click2.mp3');
let tablero = [
  [1,2,3],
  [4,5,6],
  [7,8," "]
];
let ficha1 = document.getElementById("ficha1");
let ficha2 = document.getElementById("ficha2");
let ficha3 = document.getElementById("ficha3");
let ficha4 = document.getElementById("ficha4");
let ficha5 = document.getElementById("ficha5");
let ficha6 = document.getElementById("ficha6");
let ficha7 = document.getElementById("ficha7");
let ficha8 = document.getElementById("ficha8");
/*
let esRepetido = false;
buscarOtraVez:
for (let i = 0; i<=2 ; i++){
  
  for (let j = 0; j<=2 ; j++){
    valorParaAsginar = Math.floor((Math.random() * 7) + 1);
    buscarRepetido(i,j, valorParaAsginar);
    if(!esRepetido){
      tablero[i][j] = valorParaAsginar; 
    }else{
      continue buscarOtraVez;
    }
    tablero[2][2] = " ";
  }
}
function buscarRepetido(maxI,maxJ,valorParaAsginar){
  for (let i = 0; i<=maxI ; i++){
    for (let j = 0; j<=maxJ ; j++){
      if (tablero[i][j] = valorParaAsginar){
        esRepetido = true;
        break;
      } 
    }
  }
}
*/
//tablero.sort(function() {return Math.random() - 0.5});
console.log("Tablero despues del sort: " + tablero);
ficha1.innerHTML = tablero[0][0];
ficha2.innerHTML = tablero[0][1];
ficha3.innerHTML = tablero[0][2];
ficha4.innerHTML = tablero[1][0];
ficha5.innerHTML = tablero[1][1];
ficha6.innerHTML = tablero[1][2];
ficha7.innerHTML = tablero[2][0];
ficha8.innerHTML = tablero[2][1];

let ObjetoActual = {};

function search(id){
  
  switch (id){
    case "ficha1":
      ObjetoActual = ObjFicha1;
      break;
    case "ficha2":
      ObjetoActual = ObjFicha2;
      break;
    case "ficha3":
      ObjetoActual = ObjFicha3;
      break;
    case "ficha4":
      ObjetoActual = ObjFicha4;
      break;
    case "ficha5":
      ObjetoActual = ObjFicha5;
      break;
    case "ficha6":
      ObjetoActual = ObjFicha6;
      break;
    case "ficha7":
      ObjetoActual = ObjFicha7;
      break;
    case "ficha8":
      ObjetoActual = ObjFicha8;
      break;
  }
  
  i = ObjetoActual.posicionActualTop/100;
  console.log("i antes de buscar: " + i);
  j = ObjetoActual.posicionActualLeft/100;
  console.log("j antes de buscar: " + j);
  console.log("lugar vacio antes de buscar: " + lugarVacio);
  buscarArriba(i,j);
  buscarAbajo(i,j);
  buscarIzquierda(i,j);
  buscarDerecha(i,j);
  console.log("i antes de mover: " + i);
  console.log("j antes de mover: " + j);
  console.log("lugar vacio antes de mover: " + lugarVacio);
  if(lugarVacio == true){
    mover(newX,newY,i,j,id,ObjetoActual);
    actualizarObjeto(id,ObjetoActual);
    console.log("Objeto Ficha 6: " + ObjFicha6);
  }
}

function mover(newX,newY,oldX,oldY,id,ObjetoActual){
  console.log(oldX*100 + "," + oldY*100 + "=>" + newX*100 + "," + newY*100);
  //mover la matriz
  tablero[oldX][oldY] = tablero[newX][newY];
  console.log("tablero dentro de mover: " + tablero)
  //mover la ficha
  let fichaSeleccionada = document.getElementById(id);
  tablero[newX][newY] = Number(fichaSeleccionada.innerText);
  console.log("id: " + id);
  console.log("nueva matriz: " + tablero);
  console.log("innetText: " + tablero[newX][newY]);
  console.log("ficha seleccionada: " + fichaSeleccionada);
  switch (newY*100){
    case 0:
      fichaSeleccionada.style.left = "0px";
      ObjetoActual.posicionActualLeft = 0;
      break;
    case 100:
      fichaSeleccionada.style.left = "100px";
      ObjetoActual.posicionActualLeft = 100;
      break;
    case 200:
      fichaSeleccionada.style.left = "200px";
      ObjetoActual.posicionActualLeft = 200;
      break;
  }
  switch (newX*100){
    case 0:
      fichaSeleccionada.style.top = "0px";
      ObjetoActual.posicionActualTop = 0;
      break;
    case 100:
      fichaSeleccionada.style.top = "100px";
      ObjetoActual.posicionActualTop = 100;
      break;
    case 200:
      fichaSeleccionada.style.top = "200px";
      ObjetoActual.posicionActualTop = 200;
      break;
  }
  fichaSeleccionada.style.transition = "all 0.05s"
  fichaSeleccionada.style.transitionTimingFunction = "ease-in-out";
  audio.play();
  lugarVacio = false;
}

function actualizarObjeto(id,ObjetoActual){
  console.log("actualizarObjeto ID: " + id);
  console.log("actualizarObjeto ObjetoActual: " + ObjetoActual);
  switch (id){
    case "ficha1":
      ObjFicha1 = ObjetoActual;
      break;
    case "ficha2":
      ObjFicha2 = ObjetoActual;
      break;
    case "ficha3":
      ObjFicha3 = ObjetoActual;
      break;
    case "ficha4":
      ObjFicha4 = ObjetoActual;
      break;
    case "ficha5":
      ObjFicha5 = ObjetoActual;
      break;
    case "ficha6":
      ObjFicha6 = ObjetoActual;
      break;
    case "ficha7":
      ObjFicha7 = ObjetoActual;
      break;
    case "ficha8":
      ObjFicha8 = ObjetoActual;
      break;
  }
}