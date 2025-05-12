// Exercise 5: Order by year, ascending
export default function orderByYear(movies) {
    let moviesOrderByYear = []

    if (!movies) return moviesOrderByYear

    moviesOrderByYear = movies.toSorted((x, y) => {
        if (x.year - y.year == 0) return x.title.localeCompare(y.title, 'en')
        return x.year - y.year
    })

    return moviesOrderByYear
}
