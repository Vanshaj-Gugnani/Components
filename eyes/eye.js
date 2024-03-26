window.addEventListener('mousemove', (e) => {
    let deltaX2 = e.clientX - window.innerWidth/1.6;
    let deltaX = e.clientX - window.innerWidth/2.4;
    let deltaY = e.clientY - window.innerHeight/2;
    let angle2 = Math.atan2(deltaY,deltaX2) * 180/Math.PI;
    let angle = Math.atan2(deltaY,deltaX) * 180/Math.PI;
    let eye2 = document.querySelector('.eye2');
    let eye1 = document.querySelector('.eye1');
    
        // eye.style.backgroundColor = 'white'; // Uncomment if you want to change the background color
        eye2.style.transform = `rotate(${angle2 + 180}deg)`;
        eye1.style.transform = `rotate(${angle + 180}deg)`;
})

console.log(console.time())