import { queryFilms } from './movies.js';

// Query the API for a list of the movies
document.querySelectorAll('nav button').forEach((menuOption) => {
    menuOption.addEventListener('click', (e) => {
        queryFilms(e.target.id);

        const selectedMenuOption = document.querySelector('nav button.selected');
        if (selectedMenuOption !== null) {
            selectedMenuOption.classList.remove('selected');
        }
        e.target.classList.add('selected');
    });
});