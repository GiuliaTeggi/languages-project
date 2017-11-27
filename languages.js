var explore = document.getElementById("dropbtn");
var list = document.getElementById("list");
var about = document.getElementById("about"); 
var aboutme = document.getElementById("aboutme");
var head = document.querySelector("header");
var main =document.getElementById("main"); 
var nav=document.querySelector("nav"); 
var header = document.getElementById("wrapper");  

//Open and close Explore menu
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
   else {list.style.display ="none";}}); 

//Close Explore menu if click anywhere on page outside Explore
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

//Close About section clicking on X icon
var close= document.querySelector("#close");
close.addEventListener("click", function(){
  aboutme.style.display ="none";
  main.style.display = "block";
  nav.style.position = "fixed"; 
});

//Slide down and up div with class "extra" by clicking on button 
var button = document.getElementsByClassName("button");
for(var i=0; i < button.length; i++){
  button[i].addEventListener("click", function (){
    var text = event.target.parentElement.querySelector(".extra");
   text.classList.toggle("closed");
   text.classList.toggle("open");
  })
}

