// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none"; 
//     }
//     x[slideIndex-1].style.display = "block"; 
// }



// var x = document.getElementsByClassName("float-left");

// for ( var i = 0; i < x.length; i++) {
//         x[i].style.color = "white";

//       x[i].style.position = "absolute";
//     x[i].style.right = "150%";
//         x[i].style.top = (100 * ([i]+1)) + "px";

//         // var top = top + 100;
//     x[i].style.animation = "slideName " + "infinite " + (3 *([i]+1)) + "s";
// }
// var biggestHeight = 0;
// // Loop through elements children to find & set the biggest height
// $(".container *").each(function(){
//  // If this elements height is bigger than the biggestHeight
//  if ($(this).height() > biggestHeight ) {
//    // Set the biggestHeight to this Height
//    biggestHeight = $(this).height();
//  }
// });
var body = document.body
// // Set the container height
// $(".project-panels").height(biggestHeight);
$('#speck-btn').click(function() {
    $('.speck').css({
        'display': 'block'
    });
    $('body').css({
      'overflow': 'hidden'
    })

});

$('#soundswap-btn').click(function() {
    $('.soundswap').css({
        'display': 'block'
    });
     $('body').css({
      'overflow': 'hidden'
    })    
});


$('#timiseler-btn').click(function() {
    $('.timiseler').css({
        'display': 'block'
    });
     $('body').css({
      'overflow': 'hidden'
    })
});

$('#wuvr-btn').click(function() {
    $('.wuvr').css({
        'display': 'block'
    });
     $('body').css({
      'overflow': 'hidden'
    })
});

$('#badnname-btn').click(function() {
    $('.badnname').css({
        'display': 'block'
    });
     $('body').css({
      'overflow': 'hidden'
    })
});



$('.close-soundswap').click(function() {
    $('.soundswap').css({
        'display': 'none'
    });
    $('body').css({
      'overflow': 'visible'
    })
});


$('.close-timiseler').click(function() {
    $('.timiseler').css({
        'display': 'none'
    });
    $('body').css({
      'overflow': 'visible'
    })
});


$('.close-wuvr').click(function() {
    $('.wuvr').css({
        'display': 'none'
    });
    $('body').css({
      'overflow': 'visible'
    })
});


$('.close-badnname').click(function() {
    $('.badnname').css({
        'display': 'none'
    });
    $('body').css({
      'overflow': 'visible'
    })
});

$('.close-speck').click(function() {
    $('.speck').css({
        'display': 'none'
    });
    $('body').css({
      'overflow': 'visible'
    })
});









// var fixed = document.getElementById('fixed');

// fixed.addEventListener('touchmove', function(e) {

//         e.preventDefault();

// }, false);
