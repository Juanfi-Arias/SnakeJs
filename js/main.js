
let snake=[{x:0,y:0}]
let posicionActualX=0;
let posicionActualY=0;
let logitud=1;



let main = () => {
    document.addEventListener('keydown', reconocerTeclas)
}


let reconocerTeclas = (e) => {
    switch (e.keyCode) {
        case 37:
            console.log('oprimiste atras');
            posicionActualX=posicionActualX-1;
            break; case 37:
        case 38:
            console.log('oprimiste arriba');
            posicionActualY=posicionActualY-1;

            break;
        case 39:
            console.log('oprimiste derecha');
            posicionActualX=posicionActualX+1;
            break;
        case 40:
            console.log('oprimiste abajo');
            posicionActualY=posicionActualY+1;

            break;
        default:
            break;
    }
}


let jugar=()=>{
    
    if(posicionActualX>9)posicionActualX=0;
    if(posicionActualX<0)posicionActualX=10;
    if(posicionActualY>9)posicionActualY=0;
    if(posicionActualY<0)posicionActualY=10;
    //Dibujar Canvas
    let ctx=document.getElementById('canvas').getContext('2d')
    ctx.clearRect(0,0,500,500)
    ctx.strokeRect(0,0,500,500)
    ctx.fillRect(posicionActualX*50,posicionActualY*50,50,50)
}

setInterval('jugar()',60)





window.onload = main