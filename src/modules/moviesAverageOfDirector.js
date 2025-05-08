import getMoviesFromDirector from '@modules/getMoviesFromDirector'

// Exercise 3: Calculate the average of the films of a given director.
export default function moviesAverageOfDirector(movies, director) {
    if (!movies || !director) return 0

    let moviesFromDirector = []
    let moviesLength = 0
    let totalScoreAllMovies = 0
    let averageScore = 0

    moviesFromDirector = getMoviesFromDirector(movies, director)
    moviesLength = moviesFromDirector.length ? moviesFromDirector.length : 1

    totalScoreAllMovies = moviesFromDirector.reduce((acumulator, single) => {
        return acumulator + single.score
    }, 0)

    averageScore = Number((totalScoreAllMovies / moviesLength).toFixed(2))

    return averageScore
}
