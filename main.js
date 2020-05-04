


const form = document.getElementById('form');
const small =document.querySelector('small');
const body1 = document.getElementById('body');

form.addEventListener("submit" ,function(e){
    e.preventDefault();

body1.className ='submit';

}
);

a1();
function a1(){
    small.className =('show');  
}