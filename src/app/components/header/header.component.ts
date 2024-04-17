import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';
import { NavigateUtils } from '../../core/utils/navigate.utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() badgeNumber: number = 0;

  faHeart = faHeart;
  faHouse = faHouse;

  constructor(public navigate: NavigateUtils) {}
}
