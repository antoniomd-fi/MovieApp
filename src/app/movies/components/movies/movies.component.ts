import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {

  constructor(private movieService: MovieService) { }

  movies: Movie[] = this.movieService.getAllMovies();
  watchlist: Movie[] = [];
  sortBy: string = '';

  ngOnInit() {
    this.loadWatchlist();
    console.log(this.movies)
  }

  addToWatchlist(movie: Movie): void {
    if (!this.isOnWatchlist(movie)) {
      this.watchlist.push(movie);
    } else {
      this.removeFromWatchlist(movie);
    }

    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }

  removeFromWatchlist(movie: Movie): void {
    const index = this.watchlist.findIndex((m) => m.id === movie.id);

    if (index !== -1) {
      this.watchlist.splice(index, 1);
    }
  }

  isOnWatchlist(movie: Movie): boolean {
    return this.watchlist.some((m) => m.id === movie.id);
  }

  loadWatchlist() {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      this.watchlist = JSON.parse(storedWatchlist);
    }
  }

  sortMovies(type: string): void {
    this.sortBy = type;

    if (type === 'title') {
      this.movies = [...this.movies].sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === 'releasedDate') {
      this.movies = [...this.movies].sort((a, b) => a.releasedDate.getTime() - b.releasedDate.getTime());
    }
  }

}
