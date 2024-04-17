import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { ICharacter } from '../../@types/character.interface';

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

  toggleNumberOfLines(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleFavorite(): void {
    this.character.favorite = ! this.character.favorite;
  }

  handleTheIconBasedOnFavorite(): any {
    return  this.character.favorite ? this.solidHeart : this.emptyHeart;
  }
}
