/**creacion de metodos para la busqueda en la api */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@app/components/pages/interfaces/character.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacters(query = '', page = 1) {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }
  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`);
  }
}
