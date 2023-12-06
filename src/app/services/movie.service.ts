import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[] = [
    {
      id : 1,
      title: 'Tenet',
      description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      rating: 7.8,
      duration: '2h 30min',
      genre: ['Action', 'Sci-Fi'],
      releasedDate: new Date('2020-09-03'),
      trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
      poster: '/assets/img/Tenet.png'
    },
    {
      id : 2,
      title: 'Spider-Man: Into the Spider-Verse',
      description: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
      rating: 8.4,
      duration: '1h 57min',
      genre: ['Action', 'Animation', 'Adventure'],
      releasedDate: new Date('2018-12-14'),
      trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
      poster: '/assets/img/Spider Man.png'
    },
    {
      id : 3,
      title: 'Knives Out',
      description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
      rating: 7.9,
      duration: '2h 10min',
      genre: ['Comedy', 'Crime', 'Drama'],
      releasedDate: new Date('2019-11-27'),
      trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
      poster: '/assets/img/Knives Out.png'
    },
    {
      id : 4,
      title: 'Guardians of the Galaxy',
      description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans topurge the universe.',
      rating: 8.0,
      duration: '2h 01min',
      genre: ['Action', 'Adventure', 'Comedy'],
      releasedDate: new Date('2014-08-01'),
      trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
      poster: '/assets/img/Guardians of The Galaxy.png'
    },
    {
      id : 5,
      title: 'Avengers: Age of Ultron',
      description: "Description: When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3,
      duration: '2h 21min',
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      releasedDate: new Date('2015-05-01'),
      trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
      poster: '/assets/img/Avengers.png'
    },
  ];

  getAllMovies(){
    return this.movies;
  }
  
  getMovieById(id?: number): Movie | undefined {
    return this.movies.find((movie) => movie.id == id);
  }
}
