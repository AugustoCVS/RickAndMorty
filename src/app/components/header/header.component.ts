import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faHeart = faHeart;
  faHouse = faHouse;

  currentScreen: string = 'inicio';

  handleScreenChange(screen: string): void {
    this.currentScreen = screen;
  }
}
