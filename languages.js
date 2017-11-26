var explore = document.querySelector("#dropbtn");
var list = document.querySelector("#list");
var about = document.querySelector("#about"); 
var aboutme = document.querySelector("#aboutme");
var close= document.querySelector("#close");
var main =document.querySelector("#main"); 
var nav=document.querySelector("nav"); 
var header = document.querySelector("#wrapper"); 


//Open and close Explore list 
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

//Close Explore list if click outside Explore link
document.addEventListener("click", function(event){
  var click1 = explore.contains(event.target);
  if (!click1){
  list.style.display ="none";}
});

//Open and close About section
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

//Close About section by clicking on X icon
close.addEventListener("click", function(){
  aboutme.style.display ="none";
  main.style.display = "block";
  nav.style.position = "fixed"; 
});

