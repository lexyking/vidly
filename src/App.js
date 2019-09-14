import React, { Component } from 'react';
import { Movies } from './components/index'
import { getMovies } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';

import './App.css';

class App extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: {},
    sortColumn: { path: "title", order: "asc" }
  }

  componentDidMount = () => {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres
    })
  }

  handleDelete = (movie) => {
    const { movies } = this.state;
    const result = movies.filter(m => m._id !== movie._id)
    this.setState({
      movies: result
    })

  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked;
    this.setState({ movies })
  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }

  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1
    })
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn })
  }

  render() {
    const {
      movies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    // console.log(movies)
    return (

      <main className="container" >
        <Movies
          sortColumn={sortColumn}
          genres={genres}
          selectedGenre={selectedGenre}
          pageSize={pageSize}
          currentPage={currentPage}
          movies={movies}
          onDelete={(movie) => this.handleDelete(movie)}
          onLike={(movie) => this.handleLike(movie)}
          onPageChange={(page) => this.handlePageChange(page)}
          onGenreSelect={(genre) => this.handleGenreSelect(genre)}
          onSort={(path) => this.handleSort(path)}
        />

      </main>

    );
  }
}

export default App;
