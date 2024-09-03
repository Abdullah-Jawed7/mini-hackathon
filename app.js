let color = document.getElementById('vBox');
let myBtn= document.getElementById('btn12');
let my= document.getElementById('img');
let mycoll= document.querySelector('.collapse');

let val = false
myBtn.addEventListener("click" ,function(){
    console.log('aaa');
    
    if(val == false){
        color.style.backgroundColor = '#b9ff66';
my.src = './Assets/-.png'
  
    }else{
       
        // mycoll.classList.remove("show");
        color.style.backgroundColor =  '#f3f3f3';
        my.src = './Assets/+.png';
    }
    val =!val
}
);
// function(){
// color.style.backgroundColor = '#b9ff66';
// my.src = './Assets/-.png'
// }
