let api = "https://www.omdbapi.com?apikey=f49c339e&t="

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let year = document.getElementById('year');
let genre = document.getElementById('genre');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let earnings = document.getElementById('collection');
let rating = document.getElementById('ratings')



function searchMovie(){
    let userInput = document.getElementById('movie').value;

    let searchKeyword = api + userInput
    console.log(searchKeyword)

    fetch(searchKeyword)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        
        title.innerText = data.Title;
        desc.innerText = data.Plot;
        year.innerText = data.Year;
        genre.innerText = data.Genre;
        actors.innerText = data.Actors;
        director.innerText = data.Director;
        earnings.innerText = data.BoxOffice;
        rating.innerText = data.Ratings[0].Value;

    })
}