import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../@types/character.interface';
import { CardComponent } from '../../components/card/card.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { TitleComponent } from '../../components/title/title.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FavoriteService } from '../../core/services/Favorite/favorite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [TitleComponent, NotFoundComponent, CardComponent, NgIf, NgForOf, CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  favoritesCharacters$: Observable<ICharacter[]> = new Observable<ICharacter[]>();

  constructor(private favoriteService: FavoriteService) {}

  handleGetFavoriteList(): void {
   this.favoritesCharacters$ = this.favoriteService.getFavoriteList();
  }

  ngOnInit(): void {
    this.handleGetFavoriteList();
  }
}
