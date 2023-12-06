import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent {
  watchlist: Movie[] = [];
  sortBy: string = '';

  ngOnInit() {
    this.loadWatchlist();
  }

  loadWatchlist() {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      this.watchlist = JSON.parse(storedWatchlist);
    }
  }

  removeFromWatchlist(movie: Movie): void {
    const index = this.watchlist.findIndex((m) => m.id === movie.id);

    if (index !== -1) {
      this.watchlist.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
    }
  }

  sortMovies(type: string): void {
    this.sortBy = type;

    if (type === 'title') {
      this.watchlist = [...this.watchlist].sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === 'releasedDate') {
      this.watchlist = this.watchlist.sort((a, b) => new Date(a.releasedDate).getTime() - new Date(b.releasedDate).getTime());
    }
  }
}
