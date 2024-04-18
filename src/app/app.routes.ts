import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

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
