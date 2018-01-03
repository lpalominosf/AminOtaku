/*
** data de usuarios de ejemplo, contiene la sgte información de c/usuario:
** username: nombre de usuario
** avatar: la url de la imagen de avatar
** following: siguiendo
** followers: seguidores
** pages: páginas marcadas
** description: la descripción que el usuario hace de sí mismo
** location: locación
** joined: cuándo se unió a aminotaku
** contact: links de fb, instagram y github
** post: las publicaciones que ha hecho, con su tipo (reseña, imagen, noticia, video, misceláneo), con su contenido
** su hora de publicación y los tags
*/
var data = [
	{
		"username": "Lore Buccellati",
		"avatar": "<img src='assets/images/avatar-lore.jpg'>",
		"following": ["Helvette", "Ichi"],
		"followers": ["Helvette", "Ichi"],
		"pages": ["JJBA", "FMA:B"],
		"description": "Nombre: Lore <br> Apodo: Aya <br> Edad: 28 ewe <br> Anime/s Favorito/s: Jojo's, FMA, SNK, Dragon Ball",
		"location": "Santiago, Chile",
		"joined": "24 de Septiembre 2017",
		"contact": {
			"facebook": "https://www.facebook.com/Loleasdf",
			"instagram": "https://www.instagram.com/ayayweas/",
			"github": "https://github.com/lpalominosf/"
		},
		"post": [
			{
				"type": "review",
				"rating": "5/5"
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque sunt saepe vel atque, minus nemo qui eveniet aliquam itaque eligendi impedit perspiciatis corrupti. Blanditiis esse tempora necessitatibus, vitae obcaecati nam.",
				"tags": ["JJBA", "Josuke", "Anime", "Jojo's", "Bizarre", "Adventure", "Review"],
				"hour": "14:35"
			},
			{
				"type": "image",
				"image": "url",
				"text": "Este fanart está hermoso ;-;",
				"tags": ["Josuke", "JJBA", "Fanart", "Draw", "AutorName"],
				"hour": "16:20"
			},
			{
				"type": "video",
				"video": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "news",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "miscellaneous",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			}
		]
	},

	{
		"username": "Ichi",
		"avatar": "url",
		"following": ["Helvette", "Lore Buccellati", "Random Person"],
		"followers": ["Helvette", "Lore Buccellati", "Random Person"],
		"pages": ["Fools"],
		"description": "Nombre: Liss <br> Apodo: Ichi <br> Edad:28 ewe <br> Me gusta: manga, xxx, yaoi <br> Anime/s Favorito/s: Super Lovers <br> Manga/s Favorito/s: Fools",
		"location": "Santiago, Chile",
		"joined": "12 de Abril, 2017",
		"contact": {
			"facebook": "http://www.facebook.com/",
			"instagram": "http://www.instagram.com/",
			"github": "http://www.github.com/"
		},
		"post": [
			{
				"type": "review",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "image",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "video",
				"video": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "news",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "miscellaneous",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			}
		]
	},

	{
		"username": "Ñoña Escarlata",
		"avatar": "url",
		"following": ["Helvette", "Lore Buccellati", "Tropirai"],
		"followers": ["Helvette", "Lore Buccellati", "Tropirai"],
		"pages": ["Página 1", "Página 2", "Página 3"],
		"description": "28. Wannabe writer. Sensocentrist. Skeptic. Libertarian. Fangirl.",
		"location": "Santiago, Chile",
		"joined": "1 de Enero, 2018",
		"contact": {
			"facebook": "https://www.facebook.com/VToriRodriguez",
			"instagram": "https://www.instagram.com/skepticalpony",
			"github": "https://github.com/malditoprotozoo"
		},
		"post": [
			{
				"type": "review",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "image",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "video",
				"video": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "news",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "miscellaneous",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			}
		]
	},

	{
		"username": "Tropirai",
		"avatar": "url",
		"following": ["Helvette", "Ñoña Escarlata"],
		"followers": ["Helvette", "Ñoña Escarlata", "Random Person"],
		"pages": ["Página 1", "Página 2", "Página 3"],
		"description": "Raimundo Lisboa Prádenas, 24 años. Videojuegos, Hardware, Neopets, Pokémon, Gatos.",
		"location": "Santiago, Chile",
		"joined": "2 de Enero, 2018",
		"contact": {
			"facebook": "http://www.facebook.com/",
			"instagram": "http://www.instagram.com/",
			"github": "#"
		},
		"post": [
			{
				"type": "review",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "image",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "video",
				"video": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "news",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "miscellaneous",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			}
		]
	},

	{
		"username": "Random Person",
		"avatar": "url",
		"following": ["Helvette", "Lore Buccellati", "Ichi"],
		"followers": ["Helvette"],
		"pages": ["Página 1", "Página 2", "Página 3"],
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit niam sit possimus officia dicta inventore.",
		"location": "La Serena, Chile",
		"joined": "17 de Diciembre, 2017",
		"contact": {
			"facebook": "#",
			"instagram": "#",
			"github": "#"
		},
		"post": [
			{
				"type": "review",
				"text": "",
				"tags": ["Lorem", "Manga", "Anime", "Review"],
				"hour": ""
			},
			{
				"type": "image",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "video",
				"video": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "news",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			},
			{
				"type": "miscellaneous",
				"image": "url",
				"text": "",
				"tags": ["", "", "", "", ""],
				"hour": ""
			}
		]
	}
]

/*
** datos del usuario que está navegando en aminotaku, contiene la misma información que el resto de data
*/

var user = {
	"username": "Helvette",
	"avatar": "<img src= 'assets/images/avatar-helvette.jpg'>",
	"following": ["Lore Buccellati", "Ichi", "Ñoña Escarlata"],
	"followers": ["Lore Buccellati", "Ichi", "Ñoña Escarlata", "Random Person"],
	"pages": ["JJBA", "FMA:B"],
	"description": "Hi! I'm a coder in progress, I love art, technology and 2D guys. I'm shy but i hope we can be friends anyway :3",
	"location": "Santiago, Chile",
	"joined": "18 de Octubre 2017",
	"contact": {
		"facebook": "http://www.facebook.com/intothev0id/",
		"instagram": "http://www.instagram.com/ihaveahybridheart",
		"github": "http://www.github.com/Helvette"
	},
	"post": [
		{
			"type": "review",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		},
		{
			"type": "image",
			"image": "url",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		},
		{
			"type": "video",
			"video": "url",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		},
		{
			"type": "news",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		},
		{
			"type": "miscellaneous",
			"image": "url",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		}
	]
}

/*
for (var i = 0; i < data.length; i++){
	console.log(data[i].username);
	console.log(data[i].avatar);
	console.log(data[i].following);
	console.log(data[i].following.length);
	console.log(data[i].followers);
	console.log(data[i].followers.length)
	console.log(data[i].pages);
	console.log(data[i].contact["facebook"]);
	console.log(data[i].contact["instagram"]);
	console.log(data[i].contact["github"]);
	console.log(data[i].description);
	console.log(data[i].location);
	console.log(data[i].joined);
	console.log(data[i].contact);
	console.log(data[i].post);
}


funciones para armar c/post

var review = function(post){

}

var image = function(post){

}

var video = function(post){

}

var news = function(post){

}

var miscellaneous = function(post){

}


for (var j = 0; j < data.length; j++){
	for(var k = 0; k < data[j].post.length; k++){
		console.log(data[j].post[k]); //muestra los datos de cada post
		console.log(data[j].post[k].type);
		console.log(data[j].post[k].text);
		console.log(data[j].post[k].tags);
		console.log(data[j].post[k].hour);
	}
} 

*/


/*
** Datos para la sección de populares del día
*/
var popular = [
		{
			"type": "review",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		},
		{
			"type": "image",
			"image": "url",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		},
		{
			"type": "image",
			"image": "url",
			"text": "",
			"tags": ["", "", "", "", ""],
			"hour": ""
		}
]

/*
** Datos para los recomendados según tus gustos
*/
var recomendados = [
	{
		"user": "Random Person"
		"type": "review",
		"text": "",
		"tags": ["", "", "", "", ""],
		"hour": ""
	},
	{
		"user": "User Random"
		"type": "image",
		"image": "url",
		"text": "",
		"tags": ["", "", "", "", ""],
		"hour": ""
	},
	{

		"type": "Random User",
		"image": "url",
		"text": "",
		"tags": ["", "", "", "", ""],
		"hour": ""
	}
]