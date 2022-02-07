const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  
  burger.addEventListener('click', () =>{
    
    // toggle Nav
    nav.classList.toggle('nav-active');

  //Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
      }
    });
    //Burger animation
    burger.classList.toggle('toggle');

  });
}


navSlide();

/* If you need call multiple functions

  const app = ()=>{
  navSlide();
  navSlide();
  navSlide();
} */