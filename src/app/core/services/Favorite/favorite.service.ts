import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ICharacter } from "../../../@types/character.interface";

@Injectable({
  providedIn: 'root',
})
export class FavoriteService{
  private favoriteListSubject: BehaviorSubject<ICharacter[]> = new BehaviorSubject<ICharacter[]>([]);
  favoriteList$: Observable<ICharacter[]> = this.favoriteListSubject.asObservable();

  getFavoriteList(): Observable<ICharacter[]> {
    return this.favoriteList$;
  }

  addFavorite(character: ICharacter): void {
    const currentList = this.favoriteListSubject.getValue();
    this.favoriteListSubject.next([...currentList, character]);
  }

  removeFavorite(character: ICharacter): void {
    const currentList = this.favoriteListSubject.getValue();
    const newList = currentList.filter((item) => item.id !== character.id);
    this.favoriteListSubject.next(newList);
  }

  isFavorite(character: ICharacter): boolean {
    const currentList = this.favoriteListSubject.getValue();
    return currentList.some((item) => item.id === character.id);
  }
}
