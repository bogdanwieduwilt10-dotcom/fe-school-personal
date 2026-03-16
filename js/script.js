console.log("Works");

console.log(movies);

const latestMovies = movies
    .sort((a, b) => b.year - a.year)
    .slice(0, 16);

console.log("16 Latest Movies", latestMovies)    


const actionMovies = movies.filter(mov => mov.genres.includes("Action"));
console.log("Action Movies:", actionMovies);


const allGenres = [];
movies.forEach(movie => {
    movie.genres.forEach(genre => {
        if (!allGenres.includes(genre)) {
            allGenres.push(genre);
        }
    });

    return allGenres;
});

console.log("Genres:", allGenres);


const list = document.getElementById('movie-names');

const nameList = latestMovies
    .map(movie => `<li>${movie.title}</li>`)
    .join('');

list.innerHTML = nameList;
