import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon} from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/'
  constructor() { }
}
