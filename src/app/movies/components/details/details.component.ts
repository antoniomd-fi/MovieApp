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

 @Input() id?: number;

  ngOnInit() {
    this.movie = this.movieService.getMovieById(this.id);
  }

}
