import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./"
import { getMovies } from "../src/services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLikeOnClick = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
    this.setState({
      movies,
    })
  }

  renderMessage() {
    const countMovies = this.state.movies.length;
    
    return countMovies === 0 ? 'No movies' : <p>Showing {countMovies} movies in the database.</p>;
  }

  render() {
    return (
      <div>
        {this.renderMessage()}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like movie={movie} onClick={this.handleLikeOnClick}/></td>
                <td>
                  <button 
                    className='btn btn-danger btn-sm' 
                    onClick={() => this.handleDelete(movie)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    );
  }
}

export default Movies;