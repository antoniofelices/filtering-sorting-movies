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
// Exercise 10: Modify the original data into a dummy array
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

export { modifyGenreArrayDeepCopy, modifyGenreArrayShallowCopy }
