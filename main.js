const apiKey="9c94b7a29671191c02aa22567b99af7f";
const baseUrl = 'https://api.themoviedb.org/3/';
const moviesUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
const trendingUrl = `${baseUrl}trending/all/day?language=en-US&api_key=${apiKey}`;
const imgUrl = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');
const trending = document.querySelector('.trending');
const movies = document.querySelector('.movies');

//Adding event listener to get trending movies 
trending.addEventListener("click",getMovies(trendingUrl));

async function getMovies(url) {
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