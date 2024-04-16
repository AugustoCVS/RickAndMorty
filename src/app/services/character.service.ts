import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetCharacterResponse } from '../@types/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly API_URL = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<IGetCharacterResponse>{
    return this.http.get<IGetCharacterResponse>(this.API_URL);
  }

  getCharacterByName({
    name,
  }: {
    name: string | null;
  }): Observable<IGetCharacterResponse> {
    return this.http.get<IGetCharacterResponse>(
      `${this.API_URL}/?name=${name}`
    );
  }
}