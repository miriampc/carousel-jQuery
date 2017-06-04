$(document).ready(function(){
  var container = $('.container ul');
  var ulChild = container.find('li');

 container.find('li:first').nextAll().hide();

  var indexImg=0;
  var nextImg = function(){
    currentImg = indexImg+1;
    if (currentImg > ulChild.length) {currentImg = 1}
    showCarousel(currentImg);
  }

  var prevImg = function(){
    currentImg = indexImg-1;
    if (currentImg < 1) {currentImg = ulChild.length}
    showCarousel(currentImg);
  }

  var dot = function(){
    var idImg=$(this).attr('data-id');
    showCarousel(idImg);
  }

  function showCarousel(position){
    $(".container ul li:nth-child("+ indexImg +")").hide();
    $(".container ul li:nth-child("+ position +")").show();
    $(".container span:nth-child("+indexImg+")").removeClass('js-active');
    $(".container span:nth-child("+position+")").addClass('js-active');
    indexImg = position;
  }

  (function automaticCarousel(){
    nextImg();
    setTimeout(automaticCarousel, 5000);
  }());

  $(".next").on('click',nextImg);
  $(".prev").on('click',prevImg);
  $(".dot").on('click',dot);
});
