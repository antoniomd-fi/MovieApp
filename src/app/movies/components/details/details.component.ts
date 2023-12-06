import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(private movieService: MovieService) { }

  movie: Movie | undefined ;
  trailerCode: string | undefined;

 @Input() id?: number;

  ngOnInit() {
    this.movie = this.movieService.getMovieById(this.id);

    if (this.movie) {
      this.trailerCode = this.extractVideoCode(this.movie.trailerLink);
    }
  }

  extractVideoCode(url: string): string {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v') || '';
  }

  onPlayerReady(event: any): void {
    const player = event.target;
    player.playVideo(); 
  }
  
}
