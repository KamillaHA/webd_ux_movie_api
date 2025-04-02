import { queryFilms } from './movies.js';

document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    
    queryFilms(e.target.id);
    
    document.querySelector('nav button.selected')?.classList.remove('selected');
    e.target.classList.add('selected');
});
