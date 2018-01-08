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



$('#soundswap-btn').click(function() {
    $('.soundswap').css({
        'display': 'block'
    });
    
});


$('#timiseler-btn').click(function() {
    $('.timiseler').css({
        'display': 'block'
    });
});

$('#wuvr-btn').click(function() {
    $('.wuvr').css({
        'display': 'block'
    });
});

$('#badnname-btn').click(function() {
    $('.badnname').css({
        'display': 'block'
    });
});



$('.close-soundswap').click(function() {
    $('.soundswap').css({
        'display': 'none'
    });
});


$('.close-timiseler').click(function() {
    $('.timiseler').css({
        'display': 'none'
    });
});


$('.close-wuvr').click(function() {
    $('.wuvr').css({
        'display': 'none'
    });
});


$('.close-badnname').click(function() {
    $('.badnname').css({
        'display': 'none'
    });
});
