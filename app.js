let heroesData = [
    { name: "Batman", phone: "444.444.4444", affiliation: "DC Comics", photo_url: "https://vignette2.wikia.nocookie.net/p__/images/4/4f/ThCAXH3UPM.jpg/revision/latest?cb=20130322115146&path-prefix=protagonist"},
    { name: "Superman", phone: "555.555.5555", affiliation: "DC Comics", photo_url: "https://static.comicvine.com/uploads/scale_small/11113/111139730/3868368-9091936489-heade.jpg"},
    { name: "Green Lantern", phone: "666.666.6666", affiliation: "DC Comics", photo_url: "http://static.rogerebert.com/uploads/movie/movie_poster/green-lantern-2011/large_zUSEYp9G7Hk9GZIfbPoOiSHvwHV.jpg"},
    { name: "Captain America", phone: "777.777.7777", affiliation: "Marvel", photo_url: "http://static.comicvine.com/uploads/scale_small/9/99801/2023464-captain_america_iron_man_610.jpg"},
    { name: "Wonder Woman", phone: "888.888.8888", affiliation: "DC Comics", photo_url: "https://vignette2.wikia.nocookie.net/dccu/images/6/6f/JL_Wonder_Woman.jpg/revision/latest?cb=20160914003449"},
    { name: "Iron Man", phone: "999.999.9999", affiliation: "Marvel", photo_url: "https://vignette4.wikia.nocookie.net/marvelcinematicuniverse/images/2/24/CACW_Tony_Textless_Poster.jpg/revision/latest/scale-to-width-down/350?cb=20160527050608"}
]

angular
.module("heroes", [])
.controller("HeroesController", [HeroesControllerFunction])

function HeroesControllerFunction (){
  this.heroes = heroesData
}
