$(document).ready(function(){
  /*
  *Escondo la segunda pantalla, al cargar la vista principal
  */
  $('#perfil').hide();

  $('#login-button').click(function(){
  $('#perfil').show();
  $('#pantalla-login').hide();
  $(".vista-inicio").show();
  });
  /*
  *Fondo animado
  */
  var count = 0;
  var imagenes= ["assets/images/fondo1.jpg",
                "assets/images/fondo2.jpg",
                "assets/images/fondo3.jpg",
                "assets/images/fondo4.jpg",
                "assets/images/fondo5.jpg"];

  var imageF = $(".fader");

  imageF.css("background-image","url('+ images[count]+')")

  setInterval(function(){
    imageF.fadeOut(300, function(){
      imageF.css("background-image","url("+ imagenes[count++%imagenes.length]+")");
      imageF.fadeIn(300);

    });
    if(count == imagenes.length){
      count=0;
    }
  },5000);

/*
*Modal registro de usuarios
*/
$('.login').click(function(){
  $('#register-btn').click(function(){
  $('#modal1').show();
  $('.modal-content').append("<button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><p class='user'>Nombre Usuario</p></div>"+
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><input class='register-modal-input' type='text' name='username'></div>"+
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><p>Email</p></div>" +
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><input class='register-modal-input' type='email' name='email'></div>" +
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><p>password</p></div>"+
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><input class='register-modal-input' type='password' name='password'></div>" +
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><p>Confirmar Password</p></div>"+
                              "<div class='row col-md-offset-2 col-xs-offset-1 col-sm-offset-1'><input class='register-modal-input' type='password' name='confirmpassword'></div>"+
                              "<div class='row col-md-offset-4 col-xs-offset-3 col-sm-offset-3'><button class='btn btn-default create-btn disabled'>Crear Cuenta</button></div>")
  });
  /*
  *Cierre del modal
  */
  $('.close').click(function(){
    $('#modal1').hide();
  });
});
/*
** función para reseña en mini side
*/
var reviewMini = function(obj, container){
  var user = obj.username;
  var hour = obj.hour;
  var img = obj.image;
  var page = obj.page
  var html = "<div class='mini-post reseña'>" +
              "<div class='row vertical-align'>" +
                "<div class='col-md-4 img-post vcenter col-xs-12'>" +
                  img +
                "</div>" +
                "<div class='col-md-8 vcenter col-xs-12'>" +
                  "<p class='title-post'><span class='user-post'>" + user + "</span> ha publicado una reseña en <span class='page-post'>" + page + "</span></p>" +
                  "<p class='p-hour'>A las <span class='hour'>"+ hour + "</span> hrs</p>" +
                "</div>" +
              "</div>" +
              "<div class='row'>" +
                "<div class='col-md-12'>" +
                  "<p class='text-right'><a href='#'>ver más</a></p>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<hr>";
  $(container).prepend(html);
}

var imageMini = function(obj, container){
  var user = obj.username;
  var img = obj.image;
  var hour = obj.hour;
  var page = obj.page;
var html = "<div class='mini-post imagen'>" +
              "<div class='row vertical-align'>" +
                "<div class='col-md-4 img-post vcenter col-xs-12'>" +
                  img +
                "</div>" +
                "<div class='col-md-8 vcenter col-xs-12'>" +
                  "<p class='title-post'><span class='user-post'>" + user + "</span> ha publicado una imagen en <span class='page-post'>" + page + "</span></p>" +
                  "<p class='p-hour'>A las <span class='hour'>" + hour + "</span> hrs</p>" +
                "</div>" +
              "</div>" +
              "<div class='row'>" +
                "<div class='col-md-12'>" +
                  "<p class='text-right'><a href='#'>ver más</a></p>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<hr>";
  $(container).prepend(html);
}

/*
** html para la sección de íconos dentro de un post
*/
var rowIcons = "<div class='row icons'>" +
          "<div class='col-sm-6 col-xs-6'>" +
            "<ul class='like-and-unlike'>" +
              "<li class='like'><span class='counter'>0</span><i class='fas fa-thumbs-up fa-lg'></i> </li>" +
              "<li class='unlike'><i class='fas fa-thumbs-down fa-lg'></i> <span class='counter'>0</span></li>" +
            "</ul>" +
            "</div>" +
          "<div class='col-sm-6 col-xs-6'>" +
            "<ul class='save-and-share'>" +
              "<li class='save'><i class='fas fa-bookmark fa-lg'></i> </li>" +
              "<li class='share'><i class='fas fa-share-square fa-lg'></i> </li>" +
            "</ul>" +
          "</div>" +
        "</div>";


/*
** función para armar un post de imagen
*/
var image = function(username, post){
  var img = post.image;
  var content = post.text;
  var tags = post.tags;
  var hour = post.hour;
  var page = "";
  for(var i = 0; i < tags.length; i++) {
    for(var k = 0; k < pages.length; k++){
      if(tags[i] == pages[k].tag) {
        page = pages[k].name;
      }
    }
    if (page == "") {
      page = pages[1].name;
    }
  }
  var aTag = "";
  for (var l = 0 ; l < tags.length; l++){
    aTag = aTag + "<a href='#'> " + tags[l] + " </a>";
  }
  var html = "<div class='post-container image'>"+
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-12'>" +
              "<p class='title-post'>" +
                "<span class='user-post'>" + username + "</span>" + "</span> ha publicado una imagen en <span class='page-post'>" + page + "</span>" + 
              "</p>" +
            "</div>" +
          "</div>" +
          "<div class='row image'>" +
            "<div class='col-sm-12 col-xs-12 img'>" +
              img +
            "</div>" +
          "</div>" +
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-12'>" +
              "<p class='post-content'>" + content + "</p>" +
              "<p class='p-hour'>A las <span class='hour'>" + hour + "</span></p>" +
            "</div>" +
            "<div class='col-sm-12 col-xs-12 tags'>" +
              aTag +
            "</div>" +
          "</div>" +
          rowIcons +
        "</div>";
  $(".posts").prepend(html);
}
/*
** función para armar un post de reseña
*/
var review = function(username, post){
  var content = post.text;
  var tags = post.tags;
  var hour = post.hour;
  var page = "";
  var img = "";
  for(var i = 0; i < tags.length; i++) {
    for(var k = 0; k < pages.length; k++){
      if(tags[i] == pages[k].tag) {
        page = pages[k].name;
        img = pages[k].image;
      }
    }
  }
  if (page == "") {
    page = pages[1].name;
    img = pages[1].image;
  }
  var aTag = "";
  for (var l = 0 ; l < tags.length; l++){
    aTag = aTag + "<a href='#'> " + tags[l] + " </a>";
  }
  var html = "<div class='post-container review'>" +
          "<div class='row vertical-align'>" +
            "<div class='col-sm-4 img-post vcenter col-xs-12'>" +
              img +
            "</div>" +
            "<div class='col-sm-8 vcenter col-xs-12'>" +
              "<p class='title-post'><span class='user-post'>" + username + "</span> ha publicado una reseña en <span class='page-post'>" + page + "</span></p>" +
            "</div>"+
          "</div>"+
          "<div class='row'>"+
            "<div class='col-sm-12 col-xs-12'>" +
              "<p class='post-content'>" + content + "</p>" +
              "<p class='p-hour'>A las <span class='hour'>" + hour + "</span></p>" +
            "</div>" +
            "<div class='col-sm-12 col-xs-12 tags'>" +
              aTag +
            "</div>" +
          "</div>" +
          rowIcons +
        "</div>";
  $(".posts").prepend(html);
}
/*
** función para armar un post de video
*/
var video = function(username, post){
  var content = post.text;
  var video = post.video;
  var tags = post.tags;
  var hour = post.hour;
  var page = "";
  for(var i = 0; i < tags.length; i++) {
    for(var k = 0; k < pages.length; k++){
      if(tags[i] == pages[k].tag) {
        page = pages[k].name;
      }
      else {
        page = pages[1].name;
      }
    }
  }
  var aTag = "";
  for (var l = 0 ; l < tags.length; l++){
    aTag = aTag + "<a href='#'> " + tags[l] + " </a>";
  }
  var html = "<div class='post-container video'>" +
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-6'>" +
              "<p class='title-post'><span class='user-post'>" + username + "</span> ha publicado un video en <span class='page-post'>" + page + "</span></p>" +
            "</div>" +
          "</div>" +
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-12 img'>" +
              video +
            "</div>" +
          "</div>" +
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-12'>" +
              "<p class='post-content'>" + content + "</p>" +
              "<p class='p-hour'>A las <span class='hour'>" + hour + "</span></p>" +
            "</div>" +
            "<div class='col-sm-12 col-xs-6 tags'>" +
              aTag +
            "</div>" +
          "</div>" +
          rowIcons +
        "</div>";
  $(".posts").prepend(html);
}
/*
** función para armar un post de noticia
*/
var news = function(username, post){
  var img = "";
  var content = post.text;
  var tags = post.tags;
  var hour = post.hour;
  var link = post.link;
  link = "<a href='" + link + "' class='link'>Link</a>";

  var page = "";
  for(var i = 0; i < tags.length; i++) {
    for(var k = 0; k < pages.length; k++){
      if(tags[i] == pages[k].tag) {
        page = pages[k].name;
      }
      else {
        page = pages[1].name;
        img = pages[1].image;
      }
    }
  }
  var aTag = "";
  for (var l = 0 ; l < tags.length; l++){
    aTag = aTag + "<a href='#'> " + tags[l] + " </a>";
  }
  var html = "<div class='post-container new'>" +
          "<div class='row vertical-align'>" +
            "<div class='col-sm-4 img-post col-xs-12'>" +
              img +
            "</div>" +
            "<div class='col-sm-8 col-xs-12'>" +
              "<div class='sup'>" +
                "<p class='title-post'><span class='user-post'>" + username + "</span> ha publicado una noticia en <span class='page-post'>" + page + "</span></p>" +
              "</div>" +
              "<div class='sub'>" +
                "<p class='post-content'>" + content + "</p>" +
                link +
                "<p class='p-hour'>A las <span class='hour'>"+ hour + "</span></p>" +
              "</div>" +
            "</div>" +
          "</div>" +
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-12 tags'>" +
              aTag +
            "</div>" +
          "</div>" +
          rowIcons +
        "</div>";
  $(".posts").prepend(html);
}
/*
** función para armar un post misceláneo
*/
var miscellaneous = function(username, post){
  var content = post.text;
  var tags = post.tags;
  var hour = post.hour;
  var aTag = "";
  for (var l = 0 ; l < tags.length; l++){
    aTag = aTag + "<a href='#'> " + tags[l] + " </a>";
  }
  var html = "<div class='post-container misc'>" +
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-12'>" +
              "<p class='title-post'><span class='user-post'>" + username + "</span> ha publicado</p>"+
            "</div>" +
            "<div class='col-sm-12 col-xs-12'>" +
              "<p class='post-content'>" + content + "</p>" +
              "<p class='p-hour'>A las <span class='hour'>" + hour + "</span></p>" +
            "</div>" +
          "</div>" +
          "<div class='row'>" +
            "<div class='col-sm-12 col-xs-12 tags'>" +
              aTag +
            "</div>" +
          "</div>" +
          rowIcons +
        "</div>";
  $(".posts").prepend(html);
}


/*
** aplicando funciones a la data
** j recorre los objetos principales de la data (representan usuarios)
** k recorre posteos por user
** click en inicio
*/
$(".inicio-ir").click(function(){
  $(".vista-perfil").hide();
  $(".vista-perfil-propio").hide();
  $(".vista-inicio").show();
  for (var j = 0; j < data.length; j++){
    for(var k = 0; k < data[j].post.length; k++){
      if ($.inArray(data[j].username, user["following"]) >= 0){
        if(data[j].post[k].type == "image") {
          image(data[j].username, data[j].post[k]);
        }
        if(data[j].post[k].type == "review") {
          review(data[j].username, data[j].post[k]);
        }
        if(data[j].post[k].type == "video") {
          video(data[j].username, data[j].post[k]);
        }
        if(data[j].post[k].type == "news") {
          news(data[j].username, data[j].post[k]);
        }
        if(data[j].post[k].type == "miscellaneous") {
          miscellaneous(data[j].username, data[j].post[k]);
        }
      }
    }
  }
  for(var m = 0; m < popular.length; m++){
    if(popular[m].type == "review"){
      reviewMini(popular[m], ".popular-container");
    }
    if(popular[m].type == "image"){
      imageMini(popular[m], ".popular-container");
    }
  }
  for(var n = 0; n < recommended.length; n++){
    if(recommended[n].type == "review"){
      reviewMini(recommended[n], ".recommended-container");
    }
    if(recommended[n].type == "image"){
      imageMini(recommended[n], ".recommended-container");
    }
  }
  // click en el nombre de un user
  $("span.user-post").click(function(){
    for(var i = 0; i < data.length; i++){
      if(data[i].username == $(this).text()){
        $(".vista-inicio").hide();
        $(".posts").empty(); //vaciando los post
        $(".username").text(data[i].username);
        $(".profile-photo").html(data[i].avatar);
        $(".following-counter").text(data[i].following.length);
        $(".followers-counter").text(data[i].followers.length);
        $(".description").text(data[i].description);
        $(".facebook").wrap(data[i].contact["facebook"]);
        $(".instagram").wrap(data[i].contact["instagram"]);
        $(".github").wrap(data[i].contact["github"]);
        $(".location").text(data[i].location);
        $(".joined").text(data[i].joined);
        for(var j = 0; j < data[i].post.length; j++){
          if(data[i].post[j].type == "image") {
            image(data[i].username, data[i].post[j]);
          }
          if(data[i].post[j].type == "review") {
            review(data[i].username, data[i].post[j]);
          }
          if(data[i].post[j].type == "video") {
            video(data[i].username, data[i].post[j]);
          }
          if(data[i].post[j].type == "news") {
            news(data[i].username, data[i].post[j]);
          }
          if(data[i].post[j].type == "miscellaneous") {
            miscellaneous(data[i].username, data[i].post[j]);
          }
        }
        var row = $(".follow").parent();
        row = $(row).parent();
        row = $(row).children();
        var username = $(row[2]).children();
        username = username[1];
        username = $(username).text();
        var hack = 0;
        for(var x = 0 ; x < user["following"].length ; x++){
          if (username == user["following"][x]) {
              hack = hack + 1;
          }
        }
        if (hack > 0){
          $(".follow").text("Seguido");
        }
        if (hack === 0) {
          $(".follow").text("Seguir");
        }
        $(".vista-perfil").show();
      }
      window.scrollTo(0, 0);
    }
  })
})
/*
** click en mi-perfil
*/
$(".mi-perfil-ir").click(function(){
  $(".vista-inicio").hide();
  $(".vista-perfil").hide();
  $(".vista-perfil-propio").show();
  alert("mskla")
})

/*
** click en populares en mobile
*/
$(".side-bar").click(function(){
  $(".side-bar").removeClass("active");
  $(".row.posts").hide();
  $(this).addClass("active");
  if($(this).hasClass("inicio-all")){
    $(".row.posts").show();
    $(".doble-oculto").hide();
  }
  if($(this).hasClass("inicio-popular")){
    $(".oculto").show();
    $(".doble-oculto").hide();
    $(".recommended-container").hide();
    $(".popular-container").show();
  }
  if($(this).hasClass("inicio-recommended")){
    $(".oculto").show();
    $(".doble-oculto").hide();
    $(".popular-container").hide();
    $(".recommended-container").show();
  }
  $(".side").removeClass("hidden-xs");
})
/*
** click en la navegación filtrada
*/
$(".perfil-bar").click(function(){
  $(".perfil-bar").removeClass("active");
  $(this).addClass("active");
  if($(this).hasClass("reviews")){
    $(".post-container").hide();
    $(".review").show();
  }
  if($(this).hasClass("images")){
    $(".post-container").hide();
    $(".image").show();
  }
  if($(this).hasClass("videos")){
    $(".post-container").hide();
    $(".video").show();
  }
  if($(this).hasClass("news")){
    $(".post-container").hide();
    $(".new").show();
  }
  if($(this).hasClass("miscellaneous")){
    $(".post-container").hide();
    $(".misc").show();
  }
  if($(this).hasClass("all")){
    $(".post-container").show();
  }
})
  $(".follow").click(function(){
    var row = $(this).parent();
    row = $(row).parent();
    row = $(row).children();
    var username = $(row[2]).children();
    username = username[1];
    username = $(username).text();
    // si el botón es seguido tiene que cambiar el texto a seguir
    // los seguidores de ese perfil tienen que disminuir 1
    // se tiene que borrar de la data
   if ($(this).text() == "Seguido") {
    $(this).text("Seguir");
    var counter = $(".followers-counter").text();
    counter = parseInt(counter);
    counter = counter - 1;
    $(".followers-counter").text(counter);
    for(var i = 0 ; i < user["following"].length ; i++){
      if (username == user["following"][i]) {
        user["following"].splice(i, 1);
      }
    }
   }else{
    $(this).text("Seguir");
    $(this).text("Seguido");
    var counter = $(".followers-counter").text();
    counter = parseInt(counter);
    counter = counter + 1;
    $(".followers-counter").text(counter);
    user["following"].push(username);
    }
  })
}); //Fin de la función principal



