$(document).ready(function(){
  var container = $('.container ul');
  var ulChild = container.find('li');

 container.find('li:first').nextAll().hide();

  var indexImg=1;
  var nextImg = function(){
    currentImg = indexImg;
    indexImg+=1;
    console.log(currentImg+"-"+indexImg);
    if (indexImg > ulChild.length) {indexImg = 1}

    $(".container ul li:nth-child("+ currentImg +")").hide();
    $(".container ul li:nth-child("+ indexImg +")").show();
  }

  var prevImg = function(){
    currentImg = indexImg;
    indexImg-=1;
    if (indexImg < 1) {indexImg = ulChild.length}

    $(".container ul li:nth-child("+ currentImg +")").hide();
    $(".container ul li:nth-child("+ indexImg +")").show();
  }

  var dot=function(){
    var idImg=$(this).attr('data-id');
    console.log(idImg);
    printImage(idImg);
  }


  function printImage(position){
    $(".container ul li:nth-child("+ indexImg +")").hide();
    $(".container ul li:nth-child("+ position +")").show();
    indexImg=position;
  }

  $(".next").on('click',nextImg);
  $(".prev").on('click',prevImg);
  $(".dot").on('click',dot);


});
