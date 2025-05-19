// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map((movie) => movie.director)
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
    return movies.filter((movie) => movie.director == director)
}

// Exercise 8: Get the best film of a year
function getBestFilmOfYear(movies, year) {
    let moviesByYear = []
    let scores = []
    let maxScore = 0
    let moviesOfTheYear = []

    if (!movies || !year) return moviesOfTheYear

    moviesByYear = movies.filter((movie) => movie.year == year)

    if (moviesByYear.length === 0) return moviesOfTheYear

    scores = moviesByYear.map((movie) => movie.score)
    maxScore = Math.max(...scores)
    moviesOfTheYear = moviesByYear.filter((movie) => movie.score === maxScore)

    return moviesOfTheYear
}

export { getAllDirectors, getMoviesFromDirector, getBestFilmOfYear }
