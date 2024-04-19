import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import {
  ICharacter,
  IGetCharacterResponse,
} from '@interfaces/character.interface';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  
  private API_URL = environment.api;

  private characterListSubject: BehaviorSubject<ICharacter[]> = new BehaviorSubject<ICharacter[]>([]);
  private characterList$: Observable<ICharacter[]> = this.characterListSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<IGetCharacterResponse>(this.API_URL).subscribe(res => {
      this.characterListSubject.next(res.results);
    })
  }

  getCharacters(): Observable<ICharacter[]> {
    return this.characterList$;
  }

  getCharacterByName({
    name,
  }: {
    name: string;
  }): Observable<IGetCharacterResponse> {
    const params = new HttpParams().set('name', name);
    return this.httpClient.get<IGetCharacterResponse>(this.API_URL, { params });
  }
}
