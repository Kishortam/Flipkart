let api = "https://omdbapi.com?apikey=f49c339e&t="

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let genre = document.getElementById('genre');
let year = document.getElementById('year');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let awards = document.getElementById('awards');
let collection = document.getElementById('collection');
let rating = document.getElementById('ratings');
let poster = document.getElementById('poster');
let hide = document.getElementById('hide');

function searchMovie(){
    let userInput = document.getElementById('movie').value;

    let searchKeyword = api + userInput;
    console.log(searchKeyword)

    fetch(searchKeyword)
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        title.innerText = data.Title;
        desc.innerText = data.Plot;
        genre.innerText = data.Genre;
        year.innerText = data.Year;
        actors.innerText = data.Actors;
        director.innerText = data.Director;
        awards.innerText = data.Awards;
        collection.innerText = data.BoxOffice;
        ratings.innerText = data.Ratings[0].Value;
        poster.source = data.Poster;
        hide.classList.remove('d-none');

    })
}