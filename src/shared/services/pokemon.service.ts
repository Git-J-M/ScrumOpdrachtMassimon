// country.service.ts
import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Observable shit hé
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class PokemonService {
  urllocal = 'http://localhost:3000/faviePokemon/';
  url = 'https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0';

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(this.urllocal)
      .pipe(tap(result => console.log('via json-server: ', result)));
  }
  getPokeApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(map(res => res['results']));
  }
  addFavie(value): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get<any[]>(value).pipe(tap(result => console.log('REPAIR ME', result)));
  }
  //   , value.id  ///// tap(result => console.log('yeet', result))
  addFavieJSON(value): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(value);
    return this.http.post(this.urllocal, value, { headers: headers });
  }
  deleteFavieJSON(value): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.delete(value, { headers: headers });
    // url verwijdert. Mogelijk moest een andere waarde niet mee worden gegeven
  }
}
