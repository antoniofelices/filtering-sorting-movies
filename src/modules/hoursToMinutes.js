// Exercise 7: Modify the duration of movies to minutes
export default function hoursToMinutes(movies) {
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
