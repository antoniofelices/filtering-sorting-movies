// Exercise 4:  Alphabetic order by title
export default function orderAlphabetically(movies) {
    let moviesOrderByAlphabetic = []

    if (!movies) return moviesOrderByAlphabetic

    moviesOrderByAlphabetic = movies
        .map((movie) => movie.title)
        .toSorted()
        .slice(0, 20)

    return moviesOrderByAlphabetic
}
