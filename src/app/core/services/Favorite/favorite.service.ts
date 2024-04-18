import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FavoriteService{
  private favoriteCharacters = new BehaviorSubject<string[]>([]);
  favoriteCharacters$ = this.favoriteCharacters.asObservable();

  addCharacter(character: string): void {
    const currentValue = this.favoriteCharacters.value;
    if (!currentValue.includes(character)) {
      this.favoriteCharacters.next([...currentValue, character]);
    }
  }

  removeCharacter(character: string): void {
    const currentValue = this.favoriteCharacters.value;
    const updatedValue = currentValue.filter((c) => c !== character);
    this.favoriteCharacters.next(updatedValue);
  }

}
