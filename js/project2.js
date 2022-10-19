// console.log('ih',window.innerHeight);
// console.log('oh',window.outerHeight);

// console.log('iw',window.innerWidth);
// console.log('ow',window.outerWidth);

// const boxElm = document.querySelector('#box');

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

// let x = 0;
// const startY = (innerHeight-boxElm.offsetHeight) / 2;

// setInterval(()=>{
//     const y = ((innerHeight - 80)/2) +(Math.sin(x++ / 180) * ((innerHeight - 80)/2))
//     boxElm.style.top = `${y}px`; 
// },10);
const rocketElm = document.getElementById('space-ship');

let rx = 0;
let right = false;

setInterval(()=>{
    rocketElm.style.left = `${rx}px`
    rx += !right ? 10 : -10;
    if (rocketElm.offsetLeft >= innerWidth){
        right = true;
        rocketElm.style.top = `${Math.random() * 80}vh`;
        rocketElm.style.transform = `rotateZ(${270}deg)`
    }else if(rx + rocketElm.offsetWidth <= 0){
        right =false;
        rocketElm.style.top = `${Math.random() * 80}vh`;
        rocketElm.style.transform = `rotateZ(${90}deg)`  
    }
},20);

// let rx = 10;

// setInterval(()=>{
//     if ((rocketElm.offsetLeft + rocketElm.offsetWidth) < innerWidth || rocketElm.offsetLeft == 0){
//         rx = rx;
//     }else if(rocketElm.offsetLeft >= innerWidth){
//         rocketElm.style.top = `${Math.random() * 100}vh`
//         rx = -rx;
//     }
//     rocketElm.style.left = `${rocketElm.offsetLeft + rx}px`;
// },20);

class Box{
    #width;
    #height;
    #dx;
    #dy;
    #elm;
    #cursorElm;
    #diameter;
    #cursorDiameter=75;
    #length;
    #elmMidX=0;
    #elmMidY=0;
    #emlCursorMidX=0;
    #emlCursorMidY=0;

    constructor(){
        this.#cursorElm = document.getElementById('cursor');
        this.#elm = document.createElement('div');
        this.#elm.classList.add('box');
        this.#width = 20 + (Math.random() * 10);
        this.#height =  this.#width; //20 + (Math.random() * 10);
        this.#dx = Math.random() * 8 * (Math.random() < 0.5? -1: 1);
        this.#dy = Math.random() * 8 * (Math.random() < 0.5? -1: 1);
        this.#elm.style.left = `${Math.random() * (innerWidth - this.#width)}px`;
        this.#elm.style.top = `${Math.random() * (innerHeight - this.#height)}px`;
        this.#elm.style.width = `${this.#width}px`;
        this.#elm.style.height = `${this.#height}px`;
        document.body.append(this.#elm);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = 0.4 + Math.random();
        this.#elm.style.backgroundColor = `rgba(${red},${green}, ${blue}, ${alpha})`;
        this.#elm.style.borderRadius = `${Math.random() * 101}%`;
        this.#elm.style.transform = `rotate(${Math.random() * 361}deg)`;
        this.#diameter = Math.sqrt(Math.pow(this.#width, 2) + Math.pow(this.#height, 2));
        this.#length = this.#diameter / 2 + this.#cursorDiameter / 2;
    }

    move(){
        this.#elmMidX= this.#elm.offsetLeft;
        this.#elmMidY=this.#elm.offsetTop;
        this.#emlCursorMidX=this.#cursorElm.offsetLeft;
        this.#emlCursorMidY=this.#cursorElm.offsetTop;

        let distance= Math.sqrt(Math.pow((this.#emlCursorMidX-this.#elmMidX),2)+Math.pow((this.#emlCursorMidY-this.#elmMidY),2));

        if (this.#elm.offsetTop >= (innerHeight - this.#height) || this.#elm.offsetTop <= 0){
            this.#dy = -this.#dy;
        }
        if (this.#elm.offsetLeft >= (innerWidth - this.#width) || this.#elm.offsetLeft <= 0){      
            this.#dx = -this.#dx;
        } 
        if(distance <= this.#length){
            this.#dx = -this.#dx;
            this.#dy = -this.#dy;  
        }
    
        this.#elm.style.left = `${this.#elm.offsetLeft + this.#dx}px`;
        this.#elm.style.top = `${this.#elm.offsetTop + this.#dy}px`; 
    }
}

const boxes = [];
for(let i = 0; i < 50; i++){
    boxes.push(new Box());
}

setInterval(()=>{
    boxes.forEach(box => box.move());
}, 20);

