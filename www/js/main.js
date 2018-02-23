
$(document).on("keyup", '.title-field', function () {
    let titleVal = $('.title-field').val();
    $.getJSON(`/movie/title/${titleVal}`, (movies) => {
        $('.result').empty();
        for(let movie of movies){
            $('.result').append(`
                <h2>${movie.title}</h2>
                <p>${movie.storyline}</p>
                <img src="${movie.posterurl}">
            `);
        }
    })
});

$(document).on("keyup", '.year-field', function () {
    let yearVal = $('.year-field').val();
    $.getJSON(`/movie/year/${yearVal}`, (movies) => {
        $('.result').empty();
        for(let movie of movies){
            $('.result').append(`
                <h2>${movie.title}</h2>
                <p>${movie.storyline}</p>
                <img src="${movie.posterurl}">
            `);
        };
    });
});

$(document).on("click", '#yearButton', function () {
    let fromYearVal = $('.fromYear').val();
    let toYearVal = $('.toYear').val();
    $.getJSON(`/movie/year/from/${fromYearVal}/to/${toYearVal}`, (movies) => {
        $('.result').empty();
        for(let movie of movies){
            $('.result').append(`
            <h2>${movie.title}</h2>
            <p>${movie.storyline}</p>
            <img src="${movie.posterurl}">
            `);
        };
    });
});

$(document).on("click", '#genreButton', function () {
    let genreVal = $('.genre-field').val();
    $.getJSON(`/movie/genre/${genreVal}`, (movies) => {
        $('.result').empty();
        for(let movie of movies){
            $('.result').append(`
            <h2>${movie.title}</h2>
            <p>${movie.storyline}</p>
            <img src="${movie.posterurl}">
            `);
        };
    });
});