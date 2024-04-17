import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigateUtils{
  currentScreen: string = '/';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentScreen = this.router.url;
      });
  }

  handleNavigate({ screen }: { screen: string }): void {
    this.currentScreen = screen;
    this.router.navigate([screen]);
  }
}
