var menu = document.getElementById("nav");
var ventana = document.getElementById("ventana");
var toggler = document.getElementById("toggler");

document.getElementById('nav').addEventListener("click", function(){
  
    if(ventana.classList.contains("navactive")){
       ventana.classList.remove("navactive");
    }else if(!ventana.classList.contains("navactive")){
       ventana.classList.toggle("navactive");
    }

    if(marca.classList.contains("marca")){
        marca.classList.remove("marca");
     }else if(!marca.classList.contains("marca")){
        marca.classList.toggle("marca");
     }

     if(toggler.classList.contains("icon-menu")){
        toggler.classList.remove("icon-menu");
        toggler.classList.toggle("icon-cross");
     }else if(!toggler.classList.contains("icon-menu")){
        toggler.classList.remove("icon-cross");
        toggler.classList.toggle("icon-menu")
     }
   
 });
 