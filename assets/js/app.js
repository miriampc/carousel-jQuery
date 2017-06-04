$(document).ready(function(){
  var container = $('.container ul');
  var ulChild = container.find('li');

 container.find('li:first').nextAll().hide();

  var indexImg=1;
  var nextImg = function(){
    currentImg = indexImg+1;
    if (currentImg > ulChild.length) {currentImg = 1}
    printImage(currentImg);
  }

  var prevImg = function(){
    currentImg = indexImg-1;
    if (currentImg < 1) {currentImg = ulChild.length}
    printImage(currentImg);
  }

  var dot=function(){
    var idImg=$(this).attr('data-id');
    printImage(idImg);
  }

  function printImage(position){
    $(".container ul li:nth-child("+ indexImg +")").hide();
    $(".container ul li:nth-child("+ position +")").show();
    indexImg = position;
  }

  (function showCarousel(){
    nextImg();
    setTimeout(showCarousel, 2000);
  }());

  $(".next").on('click',nextImg);
  $(".prev").on('click',prevImg);
  $(".dot").on('click',dot);
});
