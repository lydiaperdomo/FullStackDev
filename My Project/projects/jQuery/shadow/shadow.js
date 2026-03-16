
$(document).ready(function() {





$('#openBox').click(function(){
    $('#overlay').fadeIn();
    $('#shadowBox').fadeIn();
});

$('#closeBox').click(function(){
    $('#overlay').fadeOut();
    $('#shadowBox').hide();

});

$('#shadowBox').click(function(event){
    event.stopPropagation();
});

$('#overlay').click(function(){
    $('#overlay').fadeOut();
    $('#shadowBox').hide();
});

});

