const baseUrl = 'https://api.themoviedb.org/3/';
const moviesUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
const trendingUrl = `${baseUrl}trending/all/day?language=en-US&api_key=${apiKey}`;

const main = document.getElementById('main');
const trending = document.querySelector('.trending');
const movies = document.querySelector('.movies');

//Adding event listener to get trending movies 
trending.addEventListener("click",getMovies(trendingUrl));

async function getMovies(url) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
}