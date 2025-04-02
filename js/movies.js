import { apiKey } from './info.js';

const baseUrl = 'https://api.themoviedb.org/3/movie/';

export const queryFilms = async (query) => {
    try {
        const response = await fetch(`${baseUrl}${query}`, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
        const data = await response.json();
        showFilms(data.results);
    } catch (error) {
        showError(error.message);
    }
};

const showFilms = (films) => {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';

    films.forEach(({ title, poster_path, overview, original_title, release_date }) => {
        const filmCard = document.querySelector('#filmCard').content.cloneNode(true);
        Object.assign(filmCard.querySelector('h2'), { innerText: title });
        Object.assign(filmCard.querySelector('img'), {
            src: `https://image.tmdb.org/t/p/w154/${poster_path}`,
            alt: `Poster for ${title}`
        });
        Object.assign(filmCard.querySelector('.film-overview'), { innerText: overview });
        Object.assign(filmCard.querySelector('.original-title'), { innerText: original_title });
        Object.assign(filmCard.querySelector('.date'), { innerText: release_date });
        movieList.append(filmCard);
    });
};
