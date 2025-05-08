// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
    if (!movies || !genre) return 0

    let moviesByCategory = []
    let moviesLength = 0
    let totalScoreAllMovies = 0
    let averageScore = 0

    moviesByCategory = movies.filter((movie) => {
        if (movie.genre.includes(genre)) return movie
    })
    moviesLength = moviesByCategory.length ? moviesByCategory.length : 1

    totalScoreAllMovies = moviesByCategory.reduce((acumulator, single) => {
        return acumulator + single.score
    }, 0)

    averageScore = Number((totalScoreAllMovies / moviesLength).toFixed(2))

    return averageScore
}
