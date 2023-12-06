import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { MoviesComponent } from './components/movies/movies.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    MoviesComponent,
    WatchlistComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [],
      {bindToComponentInputs: true}
    ),
    YouTubePlayerModule
  ],
  exports: [
  ]
})
export class MoviesModule { }
