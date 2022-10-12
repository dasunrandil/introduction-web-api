// addEventListener('mousemove', (eventData)=>{
//     console.log(eventData.pageX, eventData.pageY);
// });

const cursorElm = document.getElementById('cursor'); 

addEventListener('mousemove', (eventData)=>{
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
});
