
console.log(document.lastModified);


// var homePage = document.getElementsByClassName('home-section'[0]);
// var header = document.getElementsByTagName('header')[0];
// function showHeader() {
//   header.style.display = "block";
// }
// function hideHeader() {
//   header.style.display = "none";
// }






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
