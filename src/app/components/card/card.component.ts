import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faHeart as solidHeart,
} from '@fortawesome/free-solid-svg-icons';

import { ICharacter } from '@interfaces/character.interface';
import { FavoriteService } from '@core/services/Favorite/favorite.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@components/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, CommonModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() character!: ICharacter;

  isExpanded: boolean = false;
  solidHeart = solidHeart;
  emptyHeart = regularHeart;

  constructor(
    private favoriteService: FavoriteService,
    public dialog: MatDialog
  ) {
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      data: this.character,
    });
  }

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
    return this.favoriteService.isFavorite(this.character)
      ? this.solidHeart
      : this.emptyHeart;
  }

  isIconActive(): boolean {
    return this.favoriteService.isFavorite(this.character);
  }
}
