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

class Box{
    #width;
    #height;
    #dx;
    #dy;
    #elm;

    constructor(){
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
    }

    move(){
        if (this.#elm.offsetTop >= (innerHeight - this.#height) || this.#elm.offsetTop <= 0){
            this.#dy = -this.#dy;
        }
        if (this.#elm.offsetLeft >= (innerWidth - this.#width) || this.#elm.offsetLeft <= 0){      
            this.#dx = -this.#dx;
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