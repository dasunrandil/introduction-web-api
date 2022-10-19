const inputs = ['I am Dasun Randil ;)','Welcome to my GitHub profile !', 'Checkout all the repositories !', 'Thank you ! Visit again :)'];

const text = document.getElementById('text');

let index = 0;
let charIndex = 0;
let erase = false;

const typeText = ()=>{
    if(!erase){
        text.innerText = inputs[index].substring(0, charIndex++);
        if (charIndex === inputs[index].length + 15){
            charIndex == inputs.length;
            erase = true;
        }
    }
};

const eraseText = ()=>{
    if (erase){
        text.innerText = inputs[index].substring(0 , charIndex--);
        if(charIndex === 0){
            erase =false;
            index++
            if(index === inputs.length){
                index = 0;
            }
        }
    }
}

let t1 =0;
let t2 =0;

function animateText(timeStamp) {    //1
    if(!t1) t1 = timeStamp;
    if(!t2) t2 = timeStamp;
    const diff1 = timeStamp -t1;
    const diff2 = timeStamp -t2;

    if (diff2 >= 25){
        t2 = timeStamp;
        eraseText();
    }

    if (diff1 >= 65){
        t1 = timeStamp;
        typeText();
    }

    requestAnimationFrame(animateText);
} 

requestAnimationFrame(animateText);