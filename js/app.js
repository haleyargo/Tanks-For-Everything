/////GENERAL/////
const logo = document.querySelector('.logo');
const cart = document.querySelector('.cart i');

logo.addEventListener('click',function(){
  location.href = 'index.html';
})

cart.addEventListener('click',function(){
  location.href = 'cart.html';
})

// execute the code only if the class name "page-sample" appears somewhere on the page
if( document.querySelector('.page-sample') ){

  // save references to the button and overlay
  const btn = document.querySelector('button');
  const overlay = document.querySelector('.overlay');

  // open the overlay
  btn.addEventListener('click',function(){
    overlay.classList.remove('hide');
    setTimeout(function(){overlay.classList.remove('fade')},100);
  })

  // close the overlay
  overlay.addEventListener('click',function(){
    overlay.classList.add('fade');
    setTimeout(function(){overlay.classList.add('hide')},200);
  })

}

//HELP//

const helpbutton = document.querySelector('.help');
const helpoverlay = document.querySelector('.help-pop');
const help1 = document.querySelector('.help-pop .help1');
const help2 = document.querySelector('.help-pop .help2');
const yeshelp = document.querySelector('.help1 .yes');
const nohelp = document.querySelector('.help1 .no');
const okhelp = document.querySelector('.help2 .ok');


helpbutton.addEventListener('click',function(){
  helpoverlay.classList.remove('hidden');
  help2.classList.add('hidden');
  help1.classList.remove('hidden');
})

yeshelp.addEventListener('click',function(){
  help1.classList.add('hidden');
  help2.classList.remove('hidden');
})

nohelp.addEventListener('click',function(){
  helpoverlay.classList.add('hidden');
})

okhelp.addEventListener('click',function(){
  helpoverlay.classList.add('hidden');
})


//BUILD PAGE SEQUENCE//


//ORDER DETAILS//
if(document.querySelector('.orders')){
const vieworder = document.querySelector('.prevorders');
const orderoverlay = document.querySelector('.orderdetails');
 
 // open the overlay
  vieworder.addEventListener('click',function(){
    orderoverlay.classList.remove('hidden');
  })

  orderoverlay.addEventListener('click',function(){
    orderoverlay.classList.add('hidden');
  })
}
//INPUT DATA//


  // check if we're on the login page
if(document.querySelector('.login')||document.querySelector('.register')){

  const form = document.querySelector('form');
  const nameField = form.querySelector('#name');
  const surNameField = form.querySelector('#surname');
  const btn = form.querySelector('button');
  btn.disabled = true;

  form.reset();

  // enable button if the input has content
  form.addEventListener('change',function(e){
     e.preventDefault();
     if(nameField.value === ''){
       btn.disabled = true;
     } else {
       btn.disabled = false;      
     }
  })

  form.addEventListener('submit',function(e){
    e.preventDefault();
    // store the user name
    localStorage.setItem('user-name',nameField.value);
    localStorage.setItem('surname',surNameField.value);
    // need to pause a second to allow storage setting
    setTimeout(function(){
      // go off to the next page
      location.href = 'mainmenu.html';
    },1000);
  })

}


// check if we're on a page with the class name "account-page"
if(document.querySelector('.account')){

  const accountFirstName = document.querySelector('.account-first-name');
  const accountLastName = document.querySelector('.account-last-name');


  // function to see if a local storage value exists
  function checkUser(){
    if(localStorage.getItem('user-name')){
      accountFirstName.textContent = localStorage.getItem('user-name');
    }
    if(localStorage.getItem('surname')){
      accountLastName.textContent = localStorage.getItem('surname');
    }
  }
  // call function
  checkUser();

}

// check if we're on a page with the class name "account-page"
if(document.querySelector('.main-menu')){

  const greeting = document.querySelector('.greeting');


  // function to see if a local storage value exists
  function checkUser(){
    if(localStorage.getItem('user-name')){
      greeting.textContent = localStorage.getItem('user-name');
    }
  }
  // call function
  checkUser();

}


if(document.querySelector('.payscreen')){

const insertcard = document.querySelector('.payscreen');
const paybutton = document.querySelector('.paybutton');
 
 // open the overlay
 paybutton.addEventListener('click',function(){
    insertcard.classList.remove('hidden');
  })

}
  

/////////////////ADD ONS FOCUS/////////////////

if(document.querySelector('.addycontent')){


const link = document.querySelector('.addycontent a');
const img = document.querySelector('.addycontent a img');
const nextbtn = document.querySelector('.checkout');

 link.insertAdjacentHTML('beforeEnd', '<div>');

  link.addEventListener('focus',function(){
    const img = document.querySelector('.addycontent a img');
    const div = document.querySelector('.addycontent a div');

    img.classList.add('animate');
    div.textContent = img.alt;


  })


 link.addEventListener('blur',function(){
    const img = document.querySelector('.addycontent a img');
    const div = document.querySelector('.addycontent a div');

    img.classList.remove('animate');
    div.textContent = '';

  })

 nextbtn.addEventListener('click',function(){
      location.href = 'cart.html';
    })

/////////counter///////////

const counter = document.querySelectorAll('.counter');


counter.forEach(function(){


const heading = document.querySelector('.counterlabel');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let i = 0;
 
heading.textContent = i;

plus.addEventListener('click',function(){
  i++;
  heading.textContent = i;  
  minus.disabled=false;
  if (i > 9){
    plus.disabled = true;
  }
})

  minus.addEventListener('click',function(){
  i--;
  heading.textContent = i;
  plus.disabled= false;
  if (i < 1){
    minus.disabled = true;
  }
})

})

}