require("dotenv").config();
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';
const moviesUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
const trendingUrl = `${baseUrl}trending/all/day?language=en-US&api_key=${apiKey}`;
const genreMovieUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
const imgUrl = 'https://image.tmdb.org/t/p/w500';

//Array of Genre Categories
//For reference -https://www.themoviedb.org/talk/5daf6eb0ae36680011d7e6ee
const genreArray = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

const main = document.getElementById('main');
const trending = document.querySelector('.trending');
const movies = document.querySelector('.movies');
const genre= document.querySelector('.genre');

//Loading movies by default on the page
window.onload = () => {
  getMovies(trendingUrl);
};

//Adding event listener to get trending movies 
trending.addEventListener('click',function(){
  getMovies(trendingUrl)});

//Adding Event Listener to get the movies 
//Code to prevent the direct execution of click(i.e, executing function without even clicking)
movies.addEventListener('click',function() {
  getMovies(moviesUrl)});

genre.addEventListener('click',function(){
  getMovies(genreMovieUrl);
})  

async function getMovies(url) {
        main.innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);

        data.results.forEach(element => {
            const { poster_path,title, name, vote_average, id } = element;
            
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.setAttribute('id', `${id}`);
            movieCard.innerHTML = `
            <img src="${poster_path ? imgUrl + poster_path : 'default-img.jpg'}" />
              <div class='movie-info'>
                <h3>${title || name}</h3>
                <span class='rating'>${vote_average >= 1 ? vote_average.toFixed(1) : '-'}</span>
              </div>
            `;
        
            main.appendChild(movieCard);
       });
}