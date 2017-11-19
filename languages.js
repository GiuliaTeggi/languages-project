var explore = document.querySelector("#dropbtn");
var list = document.querySelector("#list");
var about = document.querySelector("#about"); 
var aboutme = document.querySelector("#aboutme");
var head = document.querySelector("header");
var close= document.querySelector("#close");
var main =document.querySelector("#main"); 
var nav=document.querySelector("nav"); 
var header = document.querySelector("#wrapper"); 
var words=document.querySelector(".words");
var link = document.querySelectorAll(".link"); 


explore.addEventListener("click", function() {
   if (aboutme.style.display === "flex"){
      aboutme.style.display = "none";
     main.style.display = "block";
     header.style.position = "fixed";
     nav.style.position = "fixed"; 
     list.style.display = "flex";
  }
  else if (list.style.display == "none"){
    header.style.position = "fixed";
    nav.style.position = "fixed"; 
    list.style.display = "flex";
      }
   else {list.style.display ="none";}
}); 

document.addEventListener("click", function(event){ 
   console.log(event.target);
   if (event.target !== explore){
    list.style.display="none";
  }
})

head.addEventListener("click", function(){
  if (list.style.display === "flex"){
     list.style.display = "none";
  }});

about.addEventListener("click", function(){
  if (list.style.display === "flex"){
      list.style.display = "none";
        main.style.display = "none";
        header.style.position ="relative"; 
        nav.style.position ="relative";
        aboutme.style.display = "flex";
       }
  else if (aboutme.style.display == "none"){
        main.style.display = "none"; 
        header.style.position ="relative"; 
        nav.style.position = "relative"; 
        aboutme.style.display = "flex";
      }
   else {aboutme.style.display ="none";
        main.style.display = "block";
        }
}); 

close.addEventListener("click", function(){
  aboutme.style.display ="none";
  main.style.display = "block";
  nav.style.position = "fixed"; 
});
