import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/components/movies/movies.component';
import { DetailsComponent } from './movies/components/details/details.component';
import { WatchlistComponent } from './movies/components/watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: DetailsComponent }, 
  { path: 'watchlist', component: WatchlistComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
