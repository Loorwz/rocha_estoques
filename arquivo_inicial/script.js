


window.scroll = () =>{

    if(window.onscroll > 100){
        document.querySelector('header').classList.add("active");
    }else{
        document.querySelector('header').classList.remove('active')
    }

}