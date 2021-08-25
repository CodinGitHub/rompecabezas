function buscarArriba(i, j){
  let coorArriba = i - 1;
  if (coorArriba < 0){
     console.log("Fuera de tablero arriba");
  }else if (tablero[coorArriba][j] == " "){
      console.log("vacío arriba");
      lugarVacio = true;  
      newX = coorArriba;
      newY = j; 
  }else{
    lugarVacio = false;
  }
}
function buscarAbajo(i, j){
  if (lugarVacio == false){ 
    let coorAbajo = i + 1;
    if (coorAbajo > 2){
      console.log("Fuera de tablero abajo");
    }else if (tablero[coorAbajo][j] == " "){
      console.log("vacio abajo");
      lugarVacio = true;   
      newX = coorAbajo;
      newY = j; 
    }else{
      lugarVacio = false; 
    }
  }
}
function buscarIzquierda(i, j){
  if (lugarVacio == false){ 
    let coorIzquierda = j - 1;
    if(coorIzquierda < 0){ 
      console.log("Fuera de tablero izquierda");
    }else if (tablero[i][coorIzquierda] == " "){
        console.log("vacio izquierda");
        lugarVacio = true;
        newX = i;
        newY = coorIzquierda; 
    }else{
      lugarVacio = false; 
    }
  }
}
function buscarDerecha(i,j){
  if (lugarVacio == false){ 
    let coorDerecha = j + 1;
    if(coorDerecha > 2){ 
      console.log("Fuera de tablero derecha");
    }else if (tablero[i][coorDerecha] == " "){
        console.log("vacio derecha");
        lugarVacio = true;
        newX = i;
        newY = coorDerecha; 
    }else{
      lugarVacio = false; 
    }
  }
}