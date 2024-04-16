import { Component, OnInit, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { ICharacter } from '../../@types/character.interface';
import { TitleComponent } from '../common/title/title.component';
import { NotFoundComponent } from '../common/not-found/not-found.component';
import { InputComponent } from '../common/input/input.component';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, InputComponent, NotFoundComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  characterList: ICharacter[] = [];
  search = new FormControl('');
  loading = signal(false);

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

  handleSearch(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((value) =>
          this.characterService.getCharacterByName({ name: value }).pipe(
            catchError(() => {
              return (this.characterList = []);
            })
          )
        )
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
