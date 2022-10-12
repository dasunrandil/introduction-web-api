// addEventListener('mousemove', (eventData)=>{
//     console.log(eventData.pageX, eventData.pageY);
// });

const cursorElm = document.getElementById('cursor'); 

// addEventListener('mousemove', (eventData)=>{
//     cursorElm.style.left = `${eventData.pageX}px`;
//     cursorElm.style.top = `${eventData.pageY}px`;
// });

document.body.addEventListener('mouseout', ()=>{
    cursorElm.style.opacity = 0;
});

document.body.addEventListener('mouseenter', ()=>{
    cursorElm.style.opacity = 1;
});

// let x = 0;

// const tmrId1 = setInterval(()=>{
//     console.log("print-this..." + x++);
// },500);

// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', ()=> clearInterval(tmrId1));

// const tmrId1 = setTimeout(()=>{
//     console.log("Bombe Pipiruwa...!");
// },5000);

// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', ()=> {
//     clearTimeout(tmrId1);
//     console.log("Nishkriya una...!")
// });

let tmrId = null;

addEventListener('mousemove', (eventData)=>{
    // if(tmrId != null){
    if(tmrId){                  //!= null can be neglected due to truthy(search MDN)
        clearTimeout(tmrId);
        tmrId = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    tmrId = setTimeout(()=>{
        cursorElm.style.opacity = 0; 
    },2000)
});