 
   // Selecting elements
   const btnShare = document.getElementById("btn-share");
   const btnActive = document.getElementById("btn-active");
   const defaultState = document.getElementById("default-state");
   const activeState = document.getElementById("active-state");
   const desktopDesign = document.querySelector('.desktop-design')
   const shareBtn = document.querySelector('.share-btn')

   
   //desktop and tabelt view

   function isDesktopView() {
   return window.innerWidth >= 480;
   }

   btnShare.addEventListener("click", function(e) {
      e.stopPropagation();

      if (isDesktopView()) {
         if (desktopDesign.style.display === "flex") {
            desktopDesign.style.display = "none";
         } else {
            desktopDesign.style.display = "flex";
         }
      } else {
         defaultState.style.display = "none";
         activeState.style.display = "flex";
      }
      });

      //Mobile view 
      btnActive.addEventListener("click", function() {
      activeState.style.display = "none";
      defaultState.style.display = "flex";
      });


   document.addEventListener("click", function(e) {
   if (isDesktopView() && 
         !desktopDesign.contains(e.target) && 
         !btnShare.contains(e.target)) {
      desktopDesign.style.display = "none";
   }
   });

      //Reset to default state on window resize
      
   window.addEventListener("resize", function() {
   if (isDesktopView()) {

         defaultState.style.display = "flex";
         activeState.style.display = "none";
         desktopDesign.style.display = "none";
         } else {
         desktopDesign.style.display = "none";
         if (activeState.style.display === "flex") {
         } else {
            defaultState.style.display = "flex";
         }
   }
   });



 
  
 