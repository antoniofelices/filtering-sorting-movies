// Exercise 3: Calculate the average of the films of a given director.
function calculateMoviesAverageByDirector(movies, director) {
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

// Exercise 6: Calculate the average of the movies in a category
function calculateMoviesAverageByCategory(movies, genre) {
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

// Exercise 7: Modify the duration of movies to minutes
function calculateDurationInMinutes(movies) {
    let moviesDurationByMinuts = []

    if (!movies) return moviesDurationByMinuts

    moviesDurationByMinuts = movies.map((movie) => {
        const minutesToHour = 60
        let duration = movie.duration
        let durationArray = []
        let hours = ''
        let minutes = 0
        let totalMinutes = 0

        durationArray = duration.split(' ')
        hours = Number(durationArray[0].replace('h', ''))
        minutes = durationArray[1]
            ? Number(durationArray[1].replace('min', ''))
            : 0

        totalMinutes = hours * minutesToHour + minutes

        return {
            ...movie,
            duration: totalMinutes,
        }
    })

    return moviesDurationByMinuts
}

export {
    calculateMoviesAverageByDirector,
    calculateMoviesAverageByCategory,
    calculateDurationInMinutes,
}
