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

export { orderByTitle, orderByYear }
