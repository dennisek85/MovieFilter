
$(document).on("click", '#title', function () {
    let titleVal = $('.title').val();
    location.pathname = '/movie/title/' + titleVal;
});