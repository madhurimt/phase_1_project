const baseUrl = 'https://api.themoviedb.org/3/';
const moviesUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
const trendingUrl = `${baseUrl}trending/all/day?language=en-US&api_key=${apiKey}`;