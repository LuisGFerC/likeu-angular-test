import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor() {}

  searchCharacters(query = '', page = 1) {}
  getDetails(id: number) {}
}
