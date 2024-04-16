import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../@types/character.interface';
import { TitleComponent } from '../../components/common/title/title.component';
import { NotFoundComponent } from '../../components/common/not-found/not-found.component';
import { CardComponent } from '../../components/common/card/card.component';
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
