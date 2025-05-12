// Exercise 2: Get the films of a certain director
export default function getMoviesFromDirector(movies, director) {
    return movies.filter((movie) => movie.director == director)
}
