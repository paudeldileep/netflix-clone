
const API_KEY="0a2d71b90ca87365099c754efc8b59cd";

const requests={
    trendingMovies:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixoriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    topratedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
   horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
   romanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   documentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests