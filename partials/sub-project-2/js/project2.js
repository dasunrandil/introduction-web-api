// console.log('ih',window.innerHeight);
// console.log('oh',window.outerHeight);

// console.log('iw',window.innerWidth);
// console.log('ow',window.outerWidth);

const boxElm = document.querySelector('#box');

// console.log(boxElm.clientHeight, boxElm.clientWidth);
// console.log(boxElm.offsetWidth, boxElm.offsetHeight);
// boxElm.style.top = `${innerHeight -80}px`;

/* 1st method */

// let y = 0;
// let up = false;

// setInterval(()=>{
//     boxElm.style.top = `${y}px`
//     y += !up ? 10 : -10;
//     if ((y + boxElm.offsetHeight >= innerHeight)){
//         up = true;
//     }else if(y <=0){
//         up =false;  
//     }
// },50);

/* Using math.sin() */

let x = 0;
// const startY = (innerHeight-boxElm.offsetHeight) / 2;

setInterval(()=>{
    const y = ((innerHeight - 80)/2) +(Math.sin(x++ / 180) * ((innerHeight - 80)/2))
    boxElm.style.top = `${y}px`; 
},10);