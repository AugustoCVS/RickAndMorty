import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { NgFor, NgIf } from '@angular/common';

import {
  ICharacter,
  IGetCharacterResponse,
} from '../../@types/character.interface';
import { CharacterService } from '../../core/services/Character/character.service';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from '../../components/input/input.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { TitleComponent } from '../../components/title/title.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitleComponent,
    InputComponent,
    NotFoundComponent,
    CardComponent,
    NgIf,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  characterList: ICharacter[] = [];
  search: FormControl = new FormControl('');
  loading: WritableSignal<boolean> = signal(false);

  constructor(private characterService: CharacterService) {
    this.handleSearch();
  }

  getCharacterList(): void {
    this.loading.set(true);
    this.characterService.getCharacters().subscribe({
      error: (err) => {
        this.characterList = [];
        console.error(err);
      },
      next: (res) => {
        this.characterList = res.results;
      },
      complete: () => this.loading.set(false),
    });
  }

  handleGetCharacterByName(name: string): Observable<IGetCharacterResponse> {
    return this.characterService.getCharacterByName({ name: name }).pipe(
      catchError(() => {
        return (this.characterList = []);
      })
    );
  }

  handleSearch(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value: string) => this.handleGetCharacterByName(value))
      )
      .subscribe({
        next: (res) => {
          this.characterList = res.results;
        },
      });
  }

  ngOnInit(): void {
    this.getCharacterList();
  }
}
