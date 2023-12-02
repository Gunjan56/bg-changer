const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
//EventListener click
box1.addEventListener('click', function(){
    console.log(box1.textContent);

}, false);
box2.addEventListener('click', () =>{
    console.log(box2.textContent);
}, false)
box3.addEventListener('click', () =>{
    console.log(box3.textContent);
}, false)
box4.addEventListener('click', () =>{
    console.log(box4.textContent);
}, false)

box1.addEventListener('mouseover', function(){
    document.body.style.backgroundColor = "pink";
    
})


