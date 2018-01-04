$(document).ready(function(){
  /*
  *Esconde el modal al clickear el cualquier parte de la pantalla.
  */
  $('#myModal').modal('hide');
  /*
  *Slideshow
  */
  var count = 0;
  var images= ["/home/lore/Escritorio/laboratoria/AminOtaku/assets/images/fondo1.jpg",
                "/home/lore/Escritorio/laboratoria/AminOtaku/assets/images/fondo2.jpg",
                "/home/lore/Escritorio/laboratoria/AminOtaku/assets/images/fondo3.jpg",
                "/home/lore/Escritorio/laboratoria/AminOtaku/assets/images/fondo4.jpg",
                "/home/lore/Escritorio/laboratoria/AminOtaku/assets/images/fondo5.jpg"];
  var image = $(".fader");

  image.css("background-image","url('+ images[count]+')")

  setInterval(function(){
    image.fadeOut(500, function(){
      image.css("background-image","url('+ images[count++]+')");
      image.fadeIn(500);
    });
    if(count == images.length){
      count=0;
    }
  },5000);

}); //Fin de la función principal