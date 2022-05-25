const menuBtn = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.nav__overlay');
const hamburger = document.querySelector('.hamburger__svg');
let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
  if(!menuOpen){
    menuBtn.classList.add('active');
    sidebar.classList.add('active');
    overlay.classList.add('active');
    hamburger.src = "./images/icon-close-menu.svg"
    menuOpen=true;
  } else{
    menuBtn.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.src = "./images/icon-menu.svg"
    menuOpen=false;
  };

})

// Dropdown menu
const features = document.querySelector('.features-dropdown');
const company = document.querySelector('.company-dropdown');
const featuresBtn = document.getElementById('features-button')
const companyBtn = document.getElementById('company-button')
const companyArrow = document.querySelector('.company-arrow')
const featuresArrow = document.querySelector('.features-arrow')
let dropOpen = false;

featuresBtn.addEventListener('click', ()=>{
  if(!dropOpen){
    features.classList.add('active');
    featuresArrow.src = "./images/icon-arrow-up.svg"
    dropOpen= true;
  } else {
    features.classList.remove('active');
    featuresArrow.src = "./images/icon-arrow-down.svg"
    dropOpen= false;
  }
})
companyBtn.addEventListener('click', ()=>{
  if(!dropOpen){
    company.classList.add('active');
    companyArrow.src = "./images/icon-arrow-up.svg"
    dropOpen= true;
  } else {
    company.classList.remove('active');
    companyArrow.src = "./images/icon-arrow-down.svg"
    dropOpen= false;
  }
})

 