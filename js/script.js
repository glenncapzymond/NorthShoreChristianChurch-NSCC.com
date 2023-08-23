const nav = document.querySelector("nav");
        const menuToggler = document.querySelectorAll("#menu");
  
        menuToggler.forEach(toggler => {
          toggler.addEventListener("click", () => nav.classList.toggle("showMenu"));
        });
        



        
        


