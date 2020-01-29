// country.service.ts
<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Observable shit hé
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class PokemonService {
  urllocal = 'http://localhost:3000/favie';
  url = 'https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0';
=======
import { Injectable } from "@angular/core";
import { Pokemon } from "../model/pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Observable shit hé
import { tap, map } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable()
export class PokemonService {
  urllocal = "http://localhost:3000/faviePokemon";
  url = "https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0";
>>>>>>> bfb7bc0f8bba4299c4bc951c80c8acdc08c93542
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(this.urllocal)
<<<<<<< HEAD
      .pipe(tap(result => console.log('via json-server: ', result)));
  }

  getPokeApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(map(res => res['results']));
  }

  addFavie(value): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
=======
      .pipe(tap(result => console.log("via json-server: ", result)));
  }

  getPokeApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(map(res => res["results"]));
  }

  addFavie(value): Observable<any[]> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
>>>>>>> bfb7bc0f8bba4299c4bc951c80c8acdc08c93542
    return this.http.get<any[]>(value).pipe();
  }

  addFavieJSON(value): Observable<any> {
<<<<<<< HEAD
    const headers = new HttpHeaders().set('Content-type', 'application/json');
=======
    const headers = new HttpHeaders().set("Content-type", "application/json");
>>>>>>> bfb7bc0f8bba4299c4bc951c80c8acdc08c93542
    return this.http.post(this.urllocal, value, { headers: headers });
  }


  deleteFavieJSON(value): Observable<any> {
<<<<<<< HEAD
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.delete(value, { headers: headers });
    // url verwijdert. Mogelijk moest een andere waarde niet mee worden gegeven
=======
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.delete(value, { headers: headers });
    //url verwijdert. Mogelijk moest een andere waarde niet mee worden gegeven
>>>>>>> bfb7bc0f8bba4299c4bc951c80c8acdc08c93542
  }
}
