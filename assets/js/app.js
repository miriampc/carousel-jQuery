// var gallery = {
//   title: "",
//   src:""
//   fileType: ".jpg"
// }
$(document).ready(function(){
  $("<figure>",{'class':'figure-img'}).append(
    $("<img>",{
      'id':'img',
      'alt':'Gustavo Cerati',
      'src':'assets/images/gustavo-cerati0.jpg'
    })
  ).appendTo('.container');
  // $("<div>", {
  //     'class': 'dropdown'
  // }).append(
  //     $('<ul>', {
  //         'class': 'dropdown-menu',
  //         'aria-labelledby': 'dropdownMenu1'
  //     }).append(
  //       $('<li>')
  //         .append(
  //           $('<a>',{
  //             'href':'#',
  //             'text':'Hola Mundo'
  //           })
  //         )
  //     )
  // ).hide().appendTo('.container').fadeIn('slow');
});
