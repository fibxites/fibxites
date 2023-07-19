//......................................................
//                             BARNAV
// .....................................................

//Set Color barNav and swith bar and X mark in mobile size*******************************************
function myFunction() {
    var barnav = document.getElementById('navBar'); 
  
    barnav.classList.toggle('show');   
    document.getElementById("xmark").classList.toggle("switchOn");
    document.getElementById("bars").classList.toggle("switchOff");  
    document.getElementById("barMenu").classList.toggle("menuMobileStyle");
  }

//......................................................
//                             FAQ
// .....................................................
const accordionContainer = document.querySelector('.aContainer');

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.aHeader');

  if(accordionHeader) {
    const accordion = accordionHeader.parentElement;
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionInner = accordionContent.children[0];
    let height;

    if(accordion.classList.contains('isOpen')) {
      height = 0;
    } else {
      height = accordionInner.getBoundingClientRect().height;
    }

    accordion.classList.toggle('isOpen');
    accordionContent.style.height = height + 'px';

    console.log(accordionInner);
    console.log(accordionHeader);
    console.log(accordionContent);
    console.log(accordionContent.children[0]);
    console.log(accordionContent.style.height);
    console.log(height);
    console.log(accordionInner.getBoundingClientRect());

  }
})