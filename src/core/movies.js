// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map((movie) => movie.director)
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
    return movies.filter((movie) => movie.director == director)
}

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

// Exercise 4:  Alphabetic order by title
function orderByTitle(movies) {
    let moviesOrderByAlphabetic = []

    if (!movies) return moviesOrderByAlphabetic

    moviesOrderByAlphabetic = movies
        .map((movie) => movie.title)
        .toSorted()
        .slice(0, 20)

    return moviesOrderByAlphabetic
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
    let moviesOrderByYear = []

    if (!movies) return moviesOrderByYear

    moviesOrderByYear = movies.toSorted((x, y) => {
        if (x.year - y.year == 0) return x.title.localeCompare(y.title, 'en')
        return x.year - y.year
    })

    return moviesOrderByYear
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

// TODO: remove.
// Exercise 9: Modify the genre property to a dummy array
// Created to check deep copy.
function modifyGenreArrayDeepCopy(movies) {
    let moviesModify = []

    if (!movies) return moviesModify

    moviesModify = structuredClone(movies)
    const dummyText = 'lorem'

    moviesModify.forEach((movie) => {
        movie.genre = movie.genre.map(() => dummyText)
    })

    return moviesModify
}

// TODO: remove.
// Exercise 10: Modify the genre property to a dummy array
// Created to check shallow copy.
function modifyGenreArrayShallowCopy(movies) {
    let moviesModify = []

    if (!movies) return moviesModify

    moviesModify = movies.map((movie) => {
        return movie
    })
    const dummyText = 'lorem'

    moviesModify.forEach((movie) => {
        movie.genre = movie.genre.map(() => dummyText)
    })

    return moviesModify
}

export {
    getAllDirectors,
    getMoviesFromDirector,
    calculateMoviesAverageByDirector,
    orderByTitle,
    orderByYear,
    calculateMoviesAverageByCategory,
    calculateDurationInMinutes,
    getBestFilmOfYear,
    modifyGenreArrayDeepCopy,
    modifyGenreArrayShallowCopy,
}
