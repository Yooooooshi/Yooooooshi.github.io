$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#galeria2").fadeTo(100, 0.1);
$("#galeria2 div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#galeria2").fadeTo(300, 1);
}, 300);
});
});