const API_KEY = 'ca92f83e'; // Replace with your OMDB API key

function searchMovies() {
    const query = document.getElementById('search-input').value;
    if (query.trim() === '') {
        alert('Please enter a movie name.');
        return;
    }
    
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => displayMovies(data.Search))
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = '';

    if (!movies || movies.length === 0) {
        moviesList.innerHTML = '<p>No movies found.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.png'}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
        `;
        moviesList.appendChild(movieElement);
    });
}
