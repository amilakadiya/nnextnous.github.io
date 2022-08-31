var span = document.querySelector(".typewriter span");
if(span != null){
    var textArr = span.getAttribute("data-text").split(", "); 
}
if(textArr != null){
    var maxTextIndex = textArr.length;
}
else{
    var maxTextIndex = null
}
var sPerChar = 0.15; 
var sBetweenWord = 1.5;
var textIndex = 0; 

if(textArr != null){
    typing(textIndex, textArr[textIndex]); 
}
else{
    var textArr = null
}
function typing(textIndex, text) {
    var charIndex = 0; 
    var maxCharIndex = text.length - 1; 
    
    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, sPerChar * 1000); 
}

function deleting(textIndex, text) {
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, sPerChar * 1000); 
}

$('.protfolio-section .Protfolio').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 994,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]
  });
  
  $('.services_protfolio .Protfolio').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    responsive: [
        {
          breakpoint: 994,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ]
  });
  
  $('.about-technologies').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 994,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    
  });
  
  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  var num = 80; //number of pixels before modifying styles

  if($(window).width() < 767){

    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('.navbar').addClass('fixed');
      } else {
          $('.navbar').removeClass('fixed');
      }
    });

  } 


$(function () {
	var filterList = {
		init: function () {
			$('.portfolio-grid').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all' // show app tab on first load
    		}     
			});								
		}
	};
	// Run the show!
	filterList.init();
});
setTimeout(function () {
$('.filter:nth-child(1)').addClass('active');
  
},1000)

$('.send-cv-btn').on('click',function() {
  $('#exampleModalCenter').modal('show');
});
$("form").on("change", ".file-upload-field", function(){ 
  $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/, ''),$(this).parent(".file-upload-wrapper").addClass('file-add') );
});

$('.navbar-toggler').on('click',function(){
  $('body').toggleClass('menu-open')
})

// $('.close').on('click',function(){
//   $(this).parents('.modal').removeClass('show');
//   $('body').removeClass('modal-open');
//   $('body').css({"overflow": "auto","padding-right": "0px"});
//   $(this).parents('.model').attr('aria-modal','');
//   $(this).parents('.model').attr('role','');
//   $(this).parents('.model').attr('aria-hidden','true');
//   $(this).parents('.model').css('display','none');


//   // role="dialog"
// })