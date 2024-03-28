var botaoTemporario = document.querySelector('.temp');
var container = document.querySelector('.container');
var botaoControle = document.getElementById('btn2');
var containerLateral = document.querySelector('.side-cont');


botaoTemporario.addEventListener('click', function(){
    if(container.classList.contains('delete')){
        container.classList.remove('delete');
        botaoControle.classList.remove('temp'); 
        botaoControle.style.display = "none";
        containerLateral.style.display = "none";
    } else {
        container.classList.add('delete');
        botaoControle.classList.add('temp');
        botaoControle.style.display = "flex";
        containerLateral.style.display = "flex";
    }
});


botaoControle.addEventListener('click', function(){
    if(container.classList.contains('delete')){
        container.classList.remove('delete');
        botaoControle.classList.remove('temp');
        botaoControle.style.display = "none";
        containerLateral.style.display = "none";
    } else {
        container.classList.add('delete');      
    }
});