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
		"followers": ["Helvette", "Ichi", "Ñoña Escarlata"],
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
				"rating": "5/5",
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
				"type": "news",
				"text": "El manga de Shingeki ya supera los 71 millones de copias ;u;! <br> link:",
				"link": "https://www.koi-nya.net/2018/01/02/manga-shingeki-no-kyojin-supera-los-71-millones-copias/",
				"tags": ["SnK", "ShingekiNoKyojin", "Manga", "Shonen", "Anime"],
				"hour": "17:47"
			}
		]
	},

	{
		"username": "Ichi",
		"avatar": "url",
		"following": ["Helvette", "Lore Buccellati"],
		"followers": ["Helvette", "Lore Buccellati"],
		"description": "Nombre: Liss <br> Apodo: Ichi <br> Edad:28 ewe <br> Me gusta: manga, xxx, yaoi <br> Anime/s Favorito/s: Super Lovers <br> Manga/s Favorito/s: Fools",
		"location": "Santiago, Chile",
		"joined": "12 de Abril, 2017",
		"contact": {
			"facebook": "http://www.facebook.com/",
			"instagram": "http://www.instagram.com/",
			"github": "http://www.github.com/dime3ichig0"
		},
		"post": [
			{
				"type": "image",
				"image": "<img src='assets/images/ai-no-kusabi.jpg'>",
				"text": "Kyaaa~!",
				"tags": ["Anime", "Yaoi", "AoNoKusabi", "Novela", "Ova"],
				"hour": "08:03"
			},
			{
				"type": "miscellaneous",
				"text": "Si eres fujoshi, visita mi IG!!! Tengo mucho material para ti <3",
				"tags": ["Yaoi", "Manga", "Instagram", "Fujoshi"],
				"hour": "10:51"
			},
			{
				"type": "image",
				"image": "<img src='assets/images/fanart-ichi.jpg'>",
				"text": "Dibujo hecho por mí ^^",
				"tags": ["Fanart", "ByMe", "Ichi"],
				"hour": "13:27"
			}
		]
	},

	{
		"username": "Ñoña Escarlata",
		"avatar": "<img src='assets/images/avatar-tori.jpg'>",
		"following": ["Helvette", "Lore Buccellati", "Tropirai"],
		"followers": ["Helvette", "Tropirai"],
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
				"type": "image",
				"image": "<img src='assets/images/cat-gif.gif'>",
				"text": "Miau~",
				"tags": ["Cat", "Gif", "Anime", "AoHaruRide", "Shoujo"],
				"hour": "00:12"
			},
			{
				"type": "video",
				"video": "<img src='assets/images/video.jpg'>",
				"text": "Que buen opening.",
				"tags": ["JJBA", "JojosBizarreAdventure", "Anime", "Shonen", "Video"],
				"hour": "01:28"
			},
			{
				"type": "image",
				"image":"<img src='assets/images/cowboy-bebop.jpg",
				"text": "Spike FTW",
				"tags": ["CowboyBebop", "Anime", "sci-fi", "Screenshot"],
				"hour": "09:13"
			}
		]
	},

	{
		"username": "Tropirai",
		"avatar": "<img src='assets/images/avatar-tropirai.jpg",
		"following": ["Helvette", "Ñoña Escarlata"],
		"followers": ["Helvette", "Ñoña Escarlata"],
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
				"type": "image",
				"image":"<img src='assets/images/fanart-pokemon.jpg'>",
				"text": "",
				"tags": ["Pokemon", "Fanart", "Cute", "Anime", "Sandshrew"],
				"hour": "01:37"
			},
			{
				"type": "image",
				"image": "<img src='assets/images/meme-diavolo.jpg'>",
				"text": "xD!",
				"tags": ["JJBA", "Anime", "Meme", "Funny", "lol"],
				"hour": "11:37"
			},
			{
				"type": "image",
				"image": "<img src='assets/images/meme-diavolo.jpg'>",
				"text": "uwu",
				"tags": ["Pokemon", "Tentacool", "Tentacruel", "Anime", "Funny", "Cute"],
				"hour": "22:43"
			}
		]
	},

	{
		"username": "Random Person",
		"avatar": "<img src='assets/images/avatar-random.jpg'>",
		"following": [],
		"followers": [],
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
				"username":"Random Person",
				"type": "review",
				"rating": "4/5",
				"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint blanditiis explicabo temporibus eligendi vero eius sed quidem rem error sunt cupiditate magni enim quas necessitatibus iure facere, totam unde, possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illo illum laborum molestiae minus voluptate nobis nihil fugiat, sit aut hic eaque quisquam obcaecati sapiente est, saepe aperiam dolores explicabo!",
			"tags": ["HxH", "HunterxHunter", "Anime"],
			"hour": "11:00"
			},
			{
				"username":"Random Person",
				"type": "image",
				"image": "<img src='assets/images/oyasumipunpun.jpg'>",
				"text": "I love it!",
				"tags": ["Manga", "OPP", "OyasumiPunpun", "InioAsano", "Fanart"],
				"hour": "13:05"
			},
			{
				"username":"Random Person",
				"type": "image",
				"image": "<img src='assets/images/meme-one-punch'>",
				"text": "HAHAHAH omggg, nice one",
				"tags": ["Anime", "OPM", "OnePunchMan", "Meme", "Funny"],
				"hour": "13:18"
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
	"following": ["Lore Buccellati", "Ichi", "Ñoña Escarlata","Tropirai"],
	"followers": ["Lore Buccellati", "Ichi", "Ñoña Escarlata", "Tropirai"],
	"pages": ["JJBA"],
	"description": "Hi! I'm a coder in progress. I love art, technology and 2D guys. I'm shy but i hope we can be friends anyway :3",
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
			"rating":"5/5",
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto dignissimos praesentium, possimus velit soluta, officiis laboriosam distinctio cupiditate. Sed eius aspernatur sit sequi culpa neque officia, eveniet nostrum itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eligendi quam dolorem perferendis adipisci officia ea voluptatibus ab eum inventore, sequi nam laborum, corporis nihil. Odit qui molestiae facere, ipsum. ",
			"tags": ["FMA:B", "FullmetalAlchemistBrotherhood", "Shonen", "Anime", "Top5anime"],
			"hour": "11:08"
		},
		{
			"type": "image",
			"image": "<img src='assets/images/chihayafuru.png'>",
			"text": "Mejor pareja o mejor pareja uwu. Ni ahí con Arata.",
			"tags": ["Chihayafuru", "Karuta", "Manga", "Shoujo", "Sports"],
			"hour": "17:43"
		},

		{
			"type": "image",
			"image": "<img src='assets/images/evangelion-gif.gif'>",
			"text": "",
			"tags": ["Evangelion", "Anime", "Shonen", "Gif"],
			"hour": "21:11"
		}
	]
}


var pages = [
 {
	"name":"Jojo's Bizzare Adventure",
	"sub": "Anime, Manga",
	"image": "<img src='assets/images/jojo-bizarre-adventure'>",
	"created":"Hirohiko Araki",
	"categories": ["Shonen", "Seinen", "Sobrenatural"]
 }
]

/*
for (var i = 0; i < data.length; i++){
	console.log(data[i].username);
	console.log(data[i].avatar);
	console.log(data[i].following);
	console.log(data[i].following.length);
	console.log(data[i].followers);
	console.log(data[i].followers.length)
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
		"username":"Random Person",
		"type": "review",
		"rating": "4/5",
		"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint blanditiis explicabo temporibus eligendi vero eius sed quidem rem error sunt cupiditate magni enim quas necessitatibus iure facere, totam unde, possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illo illum laborum molestiae minus voluptate nobis nihil fugiat, sit aut hic eaque quisquam obcaecati sapiente est, saepe aperiam dolores explicabo!",
		"tags": ["HxH", "HunterxHunter", "Anime"],
		"hour": "11:00"
	},
	{
		"username":"Random Person",
		"type": "image",
		"image": "<img src='assets/images/oyasumipunpun.jpg'>",
		"text": "I love it!",
		"tags": ["Manga", "OPP", "OyasumiPunpun", "InioAsano", "Fanart"],
		"hour": "13:05"
	},
	{
		"username":"Random Person",
		"type": "image",
		"image": "<img src='assets/images/meme-one-punch'>",
		"text": "HAHAHAH omggg, nice one",
		"tags": ["Anime", "OPM", "OnePunchMan", "Meme", "Funny"],
		"hour": "13:18"
	}
]

/*
** Datos para los recomendados según tus gustos
*/
var recomendados = [
	{
		"user": "User Random",
		"type": "image",
		"image": "<img src='assets/images/the-lady-and-her-butler.jpg'>",
		"text": "I love this new josei manhwa :)!",
		"tags": ["TLAHB", "TheLadyAndHerButler", "Manga", "Manhwa", "Josei", "Jade"],
		"hour": "16:58"
	},

	{
		"user": "Random Person",
		"type": "review",
		"rating": "2/5",
		"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, fuga, asperiores. Placeat pariatur, aspernatur ullam tempore repellendus tempora assumenda recusandae tenetur sunt quos a doloribus explicabo inventore, voluptatem accusamus aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nihil atque ducimus debitis nulla expedita pariatur. Dolorem vero repudiandae, delectus incidunt tenetur dolores fuga, reiciendis, magnam iusto voluptatum assumenda natus.",
		"tags": ["SAO", "SwordArtOnline", "Anime", "Garbage", "Fanservice"],
		"hour": "18:30"
	},
	{

		"type": "Random User",
		"image": "<img src='assets/images/serial-experiment-lain.jpg'>",
		"text": "This anime is really awesome.",
		"tags": ["SerialExperimentLain", "Anime", "Indie", "Old", "Philosophy"],
		"hour": "18:52"
	}
]