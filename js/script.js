const menuBtn = document.querySelector('#menu-bars');
const navbar = document.querySelector('#navbar');

// For showing and hiding the navigation menu
menuBtn.addEventListener('click', ()=> {
	menuBtn.classList.toggle('fa-times');
	navbar.classList.toggle('active');
})

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#header #navbar a');

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');

  // For changing active states of the navigation links
  sections.forEach(section => {
    let sectionId = section.getAttribute('id');
    let sectionHeight = section.getBoundingClientRect().height;
    let sectionScrolled = section.getBoundingClientRect().top - 70 ;

    if (sectionScrolled < 0 && (sectionScrolled*-1) < sectionHeight && sectionId !== 'footer' ) {
       navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`#header #navbar a[href*=${sectionId}]`).classList.add('active');
      })
    }
  })
}

// For showing the search form
document.querySelector('#search-icon').addEventListener('click', ()=> {
  document.querySelector('#search-form').classList.toggle('active');
	document.querySelector('#search-box').focus();
})

// For hiding the search form
document.querySelector('#form-close').addEventListener('click', ()=> {
	document.querySelector('#search-form').classList.toggle('active');
})

// Home swiper object from swiperjs
 var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop: true
 });

// Review swiper object from swiperjs
  var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
   centeredSlides: true,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
   loop: true,
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
   },
 });

// Loader functions
  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut() {
    setInterval(loader, 3000);
  }

 window.onload = () => {
   fadeOut();
 }

