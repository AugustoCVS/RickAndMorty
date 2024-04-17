import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() shouldShowButton: boolean = false;
  @Input() buttonText: string = '';
}
