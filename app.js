const express = require('express');

const movies = require('./movies.json');

const app = express();
app.use(express.static("www"));
/* let routeInfo = {
    '/movie/title/:title': (title) => movie.title == req.params.title,
    '/movie/year/:year': (year) => movie.year == req.params.year
};

for(let route in routeInfo){
    app.get(route, (req,res) => {
        let chosen = movies.filter(routeInfo[route]);
        res.json(chosen);
    }
)} */


app.get('/movie/title/:title', (request,response) =>{
    let chosen = movies.filter((movie)=>{
        return movie.title == request.params.title;
    })
    response.json(chosen);
})

app.get('/movie/year/:year', (request,response) =>{
    let chosen = movies.filter((movie)=>{
        return movie.year == request.params.year;
    })
    response.json(chosen);
})

app.get('/movie/genre/:genre', (request,response) =>{
    let chosen = movies.filter((movie)=>{
        return movie.genre == request.params.genre;
    })
    response.json(chosen);
})

app.get(/^[^\.]*$/, (req, res) => {
  res.sendFile(__dirname + "/www/index.html");
});

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
}) 