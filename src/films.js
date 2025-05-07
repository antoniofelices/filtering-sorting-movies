// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map((movie) => movie.director)
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
    return movies.filter((movie) => movie.director == director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
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

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
    const data = movies
        .map((movie) => movie.title)
        .toSorted()
        .slice(0, 20)
    return data
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
    const data = movies.toSorted((x, y) => {
        if (x.year - y.year == 0) return x.title.localeCompare(y.title, 'en')
        return x.year - y.year
    })
    return data
}

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

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
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

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    }
}
