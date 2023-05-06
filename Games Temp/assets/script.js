let searchinput=document.querySelector('input[type="text"]')
  let value= searchinput.value
  let btn = document.getElementById('sendreq')
  let btnn =document.getElementById('button1')

btnn.addEventListener('click',function(){
    window.location.href='http://127.0.0.1:5500/The%20Last%20of%20us/index.html'
})
  
  btn.addEventListener('click',function(){
    
     if((searchinput.value.toUpperCase())=='NEED FOR SPEED'){
        searchinput.nextElementSibling.innerHTML = `Game is Available, Please wait..`
    }
    else if((searchinput.value.toUpperCase())=='ASPHALT'){
        searchinput.nextElementSibling.innerHTML = `Game is Available, Please wait..`
    }
    else if((searchinput.value.toUpperCase())=='THE LAST OF US'){
        searchinput.nextElementSibling.innerHTML = `Game is Available, Please wait..`
    }
    else if((value.toUpperCase())=='ON SALE'){
        searchinput.nextElementSibling.innerHTML = `Game is Available, Please wait..`
    }
    else{
        searchinput.nextElementSibling.innerHTML = `Game Not Available`
    }

})
  
  


window.addEventListener('load',function(){

    $('.lds-spinner').fadeOut(2000,function(){
        $('.loading').slideUp(2000,function(){
            $('body').css('overflow','visible');
        })
    })
})


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  

  let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 420) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

t
function topFunction() {
  document.documentElement.scrollTop = 0; 
}