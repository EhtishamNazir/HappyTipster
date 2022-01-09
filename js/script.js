// Fixed Header
window.onscroll = function() {
  const docScrollTop = document.documentElement.scrollTop;
  if (window.innerWidth>991) {
    if (docScrollTop>100) {
      document.querySelector("header").classList.add("fixed");
    }
    else{
      document.querySelector("header").classList.remove("fixed");
    }
  }
}
// Navbar Links
const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");

a.forEach(function(element) {
  element.addEventListener("click",function() {
    for(let i=0;i<a.length;i++){
      a[i].classList.remove("active");
    }
    this.classList.add("active");

    // Close navbar when click on link
    document.querySelector(".navbar").classList.toggle("show");
  });
});


// Hamburger Menu
const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function() {
  document.querySelector(".navbar").classList.toggle("show");
});

const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


 prev.addEventListener("click",function(){
     prevSlide();
     updateCircleIndicator(); 
     resetTimer();
 })

 next.addEventListener("click",function(){
    nextSlide(); 
    updateCircleIndicator();
    resetTimer();
    
 })

 // create circle indicators
  function circleIndicator(){
      for(let i=0; i< slides.length; i++){
        const div=document.createElement("div");
              // div.innerHTML=i+1;
              div.setAttribute("onclick","indicateSlide(this)")
              div.id=i;
              if(i==0){
                div.className="active";
              }
             indicator.appendChild(div);
      }
  }
  circleIndicator();

  function indicateSlide(element){
       index=element.id;
       changeSlide();
       updateCircleIndicator();
       resetTimer();
  }
   
  function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length; i++){
      indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
  }

 function prevSlide(){
   if(index==0){
    index=slides.length-1;
   }
   else{
    index--;
   }
   changeSlide();
 }

 function nextSlide(){
    if(index==slides.length-1){
      index=0;
    }
    else{
      index++;
    }
    changeSlide();
 }

 function changeSlide(){
         for(let i=0; i<slides.length; i++){
           slides[i].classList.remove("active");
         }

     slides[index].classList.add("active");
 }

 function resetTimer(){
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);
    // then started again timer
    timer=setInterval(autoPlay,4000);
 }


function autoPlay(){
    nextSlide();
    updateCircleIndicator();
}

let timer=setInterval(autoPlay,4000);






