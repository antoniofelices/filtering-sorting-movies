// Exercise 8: Get the best film of a year
export default function bestFilmOfYear(movies, year) {
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
