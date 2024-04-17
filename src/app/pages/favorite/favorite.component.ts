import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../@types/character.interface';
import { CardComponent } from '../../components/card/card.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { TitleComponent } from '../../components/title/title.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [TitleComponent, NotFoundComponent, CardComponent, NgIf, NgForOf],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  favoritesCharacters: ICharacter[] = [];
}
