let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}



window.scroll = () =>{

    if(window.onscroll > 100){
        document.querySelector('header').classList.add("active");
    }else{
        document.querySelector('header').classList.remove('active')
    }

}