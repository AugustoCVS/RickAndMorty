import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

import {
  ICharacter,
  IGetCharacterResponse,
} from '@interfaces/character.interface';
import { CharacterService } from '@core/services/Character/character.service';
import { CardComponent } from '@components/card/card.component';
import { InputComponent } from '@components/input/input.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitleComponent,
    InputComponent,
    NotFoundComponent,
    CardComponent,
    CommonModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  characterList$: Observable<ICharacter[]> = new Observable<ICharacter[]>();
  search: FormControl = new FormControl('');
  loading: WritableSignal<boolean> = signal(false);

  constructor(private characterService: CharacterService) {
    this.handleSearch();
  }

  getCharacterList(): void {
    this.loading.set(true);
    this.characterList$ = this.characterService.getCharacters().pipe(
      catchError((err: Error) => {
        console.error(err);
        this.loading.set(false);
        return of();
      })
    );
    this.loading.set(false);
  }

  handleGetCharacterByName({
    name,
  }: {
    name: string;
  }): Observable<IGetCharacterResponse> {
    return this.characterService.getCharacterByName({ name: name }).pipe(
      catchError((err: Error) => {
        console.error(err);
        return (this.characterList$ = of());
      })
    );
  }

  handleSearch(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value: string) =>
          this.handleGetCharacterByName({ name: value })
        )
      )
      .subscribe({
        next: (res) => {
          this.characterList$ = of(res.results);
        },
      });
  }

  ngOnInit(): void {
    this.getCharacterList();
  }
}
