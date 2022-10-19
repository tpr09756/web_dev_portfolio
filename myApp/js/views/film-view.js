define( function() {
    
    var internals = {
        handlers: {},
        elements: {}
    };
    var externals = {};
    
    internals.createButton = function () {
        return '<button class="random-fill"> Click me for random film! </button>';
    };


    internals.createFilmCard = function (film) {
console.log('film is :')

        return (
            `<div>
            <p>
            <strong>Title: </strong> ${film.title}
            </p>
            
            <p>
            <strong>Year: </strong> ${film.year}
            </p>
            
            <p>
            <strong>Director: </strong> ${film.director}
            </p>
            
            <p>
            <strong>IMDB rating: </strong> ${film.imdbRating}
            </p>
            </div>
            `
        );
    };

    internals.renderFilm = function(film) {
        if(internals.elements.filmCard) {
            internals.elements.filmCard.empty();
            
        }
        console.log('renderFilm');
        internals.elements.filmCard = $(internals.createFilmCard(film));
        internals.elements.app.append(internals.elements.filmCard);
        console.log('fodasse')
    };

    internals.renderButton = function() {
        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['button']);
        internals.elements.app.append(internals.elements.button);
    
    };


    externals.bind = function(element, handler) {
        
        internals.handlers[element] = handler;
    };

    externals.render = function (film) {
        internals.elements.app = $('#app');
        internals.renderButton();
            
        if (film) {
            internals.renderFilm(film);
            console.log(film);
        }
    };

    return externals;


});