var explore = document.querySelector("#dropbtn");
var list = document.querySelector("#list");
var about = document.querySelector("#about"); 
var aboutme = document.querySelector("#aboutme");
var close= document.querySelector("#close");
var main =document.querySelector("#main"); 
var nav=document.querySelector("nav"); 
var header = document.querySelector("#wrapper"); 
var words=document.querySelector(".words");

explore.addEventListener("click", function() {
   if (aboutme.style.display === "flex"){
      aboutme.style.display = "none";
     main.style.display = "block";
     header.style.position = "fixed";
     nav.style.position = "fixed"; 
     list.style.display = "290px";
  }
  else if (list.style.height = "0"){
    header.style.position = "fixed";
    nav.style.position = "fixed"; 
    list.style.height = "290px";
      }
   else {list.style.height ="0";}
}); 

document.addEventListener("click", function(event){
  var click1 = explore.contains(event.target);
  if (!click1){
  list.style.height ="0";}
});

about.addEventListener("click", function(){
  if (list.style.height !== "0"){
      list.style.height = "0";
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
