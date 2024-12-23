const movies = [
    {title:"Inception",type:"Sci-Fi",rating:8.8,release:2010},
    {title:"The Dark Knight",type:"Action",rating:9.0,release:2008},
    {title:"Intersteller",type:"Sci-Fi",rating:8.4,release:2014}
];

const addmovie=(collection,movie)=>
{
    collection.push(movie);
};
addmovie(movies,{title:"Tenet",type:"Sci-Fi",rating:7.5,release:2020});
console.log(movies);




console.log("Movies type is Sci-Fi:")
const listmoviesByType=(collection,type)=>
{
    return collection.filter(movie=>movie.type===type);
};
console.log(listmoviesByType(movies,"Sci-Fi"));

console.log("Highset rated movies:")
const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
console.log(findHighestRatedMovie(movies));


console.log("All movies by title:")
const getMovieTitle=collection=>{
    return collection.map(movie=>movie.title);
};
console.log(getMovieTitle(movies));


console.log("Movies release after given year:")

const moviesAfterYear=(collection,year)=>
{
    return collection.filter(movie=>movie.release>year)
};
console.log(moviesAfterYear(movies,2010));

movies.forEach(movie => {
    console.log(`${movie.title} (${movie.release}) is a ${movie.type} movie with a rating of ${movie.rating}.`);
});
