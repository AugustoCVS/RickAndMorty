import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() isFavorite: boolean = false
  @Input() imgSrc: string = '';
  @Input() name: string = '';
  @Input() species: string = '';
  @Input() loading: boolean = false;

  solidHeart = solidHeart;
  emptyHeart = regularHeart;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  handleRenderIcon(): IconDefinition {
    return this.isFavorite ? this.solidHeart : this.emptyHeart;
  }
}
