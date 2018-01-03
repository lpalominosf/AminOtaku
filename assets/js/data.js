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
		"avatar": "url",
		"following": ["Helvette", "Liz"],
		"followers": ["Helvette", "Liz"],
		"pages": ["JJBA", "FMA:B"],
		"description": "",
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
				"tags": ["JJBA", "Josuke", "Anime", "Jojo's", "Bizarre", "Adventure"],
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
		"username": "Liz",
		"avatar": "url",
		"following": ["Persona 1", "Persona 3"],
		"followers": ["Persona 1", "Persona 3"],
		"pages": ["Página 1", "Página 2", "Página 3"],
		"description": "",
		"location": "",
		"joined": "",
		"contact": {
			"facebook": "url",
			"instagram": "url",
			"github": "url"
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
		"username": "Persona 3",
		"avatar": "url",
		"following": ["Persona 1", "Persona 2"],
		"followers": ["Persona 1", "Persona 2"],
		"pages": ["Página 1", "Página 2", "Página 3"],
		"description": "",
		"location": "",
		"joined": "",
		"contact": {
			"facebook": "url",
			"instagram": "url",
			"github": "url"
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
		"username": "Persona 4",
		"avatar": "url",
		"following": ["Persona 1", "Persona 2"],
		"followers": ["Persona 1", "Persona 2"],
		"pages": ["Página 1", "Página 2", "Página 3"],
		"description": "",
		"location": "",
		"joined": "",
		"contact": {
			"facebook": "url",
			"instagram": "url",
			"github": "url"
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
		"username": "Persona 5",
		"avatar": "url",
		"following": ["Persona 1", "Persona 2"],
		"followers": ["Persona 1", "Persona 2"],
		"pages": ["Página 1", "Página 2", "Página 3"],
		"description": "",
		"location": "",
		"joined": "",
		"contact": {
			"facebook": "url",
			"instagram": "url",
			"github": "url"
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
]

/*
** datos del usuario que está navegando en aminotaku, contiene la misma información que el resto de data
*/

var user = {
	"username": "Helvette",
	"avatar": "url",
	"following": ["persona 1", "persona 2", "persona 3"],
	"followers": ["persona 2", "persona 4", "persona 5"],
	"pages": ["página 1", "página 2", "página 3"],
	"description": "",
	"location": "",
	"joined": "",
	"contact": {
		"facebook": "url",
		"instagram": "url",
		"github": "url"
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