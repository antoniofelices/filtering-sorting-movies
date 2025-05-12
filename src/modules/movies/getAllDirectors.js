// Exercise 1: Get the array of all directors.
export default function getAllDirectors(movies) {
    return movies.map((movie) => movie.director)
}
