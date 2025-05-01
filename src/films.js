// const movies = require('./data')

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    return array.map((item) => item.director)
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    return array.filter((item) => item.director == director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
    const movies = getMoviesFromDirector(array, director)
    const moviesLength = movies.length
    let totalScoreAllMovies = 0
    let averageScore = 0

    totalScoreAllMovies = movies.reduce((acumulator, single) => {
        return acumulator + single.score
    }, 0)
    averageScore = Number((totalScoreAllMovies / moviesLength).toFixed(2))

    return averageScore
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

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
