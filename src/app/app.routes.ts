import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favoritos',
    component: FavoriteComponent
  }
];
