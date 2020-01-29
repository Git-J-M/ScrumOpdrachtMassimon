import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemons$: Observable<Pokemon[]>;
  constructor(private pokemonService: PokemonService) { }

  getPoke(keyword: string){
    this.pokemons$ = this.pokemonService.getAllPoke(keyword);
    console.log(keyword);
  }

  ngOnInit() {
  }

}
