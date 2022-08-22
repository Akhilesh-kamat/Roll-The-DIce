const button = document.getElementById('btn');
const cube1 = document.getElementById('cube1');
const cube2 = document.getElementById('cube2');

const soundEffect = new Audio('/Assets/soundEffect.mp3')


let degree = ["-90deg","180deg","-270deg","360deg","450deg","-540deg","630deg","-720deg","810deg","-900deg","990deg","-1080deg"]


const rotateCube= () => {
    
    let i = Math.floor(Math.random()*13)
    let l = Math.floor(Math.random()*13)
    console.log(i)
    cube1.style.transform = `rotateX(${degree[i]}) translateZ(10rem) `;
    cube2.style.transform = `rotateX(${degree[l]}) translateZ(10rem) `;
    soundEffect.play()
   

    
}
button.onclick = rotateCube;