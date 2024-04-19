import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import { ICharacter } from '@interfaces/character.interface';
import { FavoriteService } from '@core/services/Favorite/favorite.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() loading: boolean = false;
  @Input() character!: ICharacter;

  isExpanded: boolean = false;
  solidHeart = solidHeart;
  emptyHeart = regularHeart;

  constructor(private favoriteService: FavoriteService) {}

  toggleNumberOfLines(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleFavorite(): void {
    if (this.favoriteService.isFavorite(this.character)) {
      this.favoriteService.removeFavorite(this.character);
    } else {
      this.favoriteService.addFavorite(this.character);
    }
  }
  
  renderTheIconBasedOnFavorite(): IconDefinition {
    return this.favoriteService.isFavorite(this.character) ? this.solidHeart : this.emptyHeart;
  }

  isIconActive(): boolean {
    return this.favoriteService.isFavorite(this.character);
  }
}
