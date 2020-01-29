import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon} from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/';
  urllocal: string = 'localhost:3000';

  constructor(private http: HttpClient) { }

  // Search pokemons
  getAllPoke(): Observable<Pokemon[]> {
    for (let keyword = 1; keyword <= 151; keyword++) {
      return this.http
    .get<Pokemon[]>(this.url + 'pokemon/${keyword}')
    .pipe(map(res => res['Search']));
    }
  }
<<<<<<< Updated upstream:old_src/app/shared/services/pokemon.service.ts
=======
  addFaviePokemon(newPoke: Pokemon): Observable<Pokemon> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.url, newPoke, { headers : headers});
  }

>>>>>>> Stashed changes:src/app/shared/services/pokemon.service.ts
  // addFaviePokemon():

  addFaviePoke(newPoke: Pokemon): Observable<Pokemon> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.url, newPoke, {headers: headers});
  }

<<<<<<< Updated upstream:old_src/app/shared/services/pokemon.service.ts
  // getFaviePoke(newPoke: string): Observable<Pokemon> {
  //   return this.HTMLOutputElement.get<Pokemon>(`${this.}`)
  // }}
=======
  getFaviePoke(newPoke: string): Observable<Pokemon> {
    return this.HTMLOutputElement.get<Pokemon>(`${this.}`)
  }
>>>>>>> Stashed changes:src/app/shared/services/pokemon.service.ts
}
