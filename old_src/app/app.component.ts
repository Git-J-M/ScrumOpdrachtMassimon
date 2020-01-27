import { Component, OnInit } from '@angular/core';
import { Pokemon } from './shared/models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokemonService } from './shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Massimons, gotta catch them all!';
  pokemons$: Observable<Pokemon[]>;
  currentPokemon$: Observable<Pokemon>;
  constructor(private pokemonService: PokemonService) {}
  // Grab all poke from service
  ngOnInit() {
    this.pokemons$ = this.pokemonService.getAllPoke();
  }
  // Adds poke to fav, needs debugging
  addFaviePoke(pokeId: number, pokeName: string) {
    const newPoke = new Pokemon(pokeId, pokeName);
    this.pokemonService.addFaviePoke(newPoke)
    .subscribe((addedFaviePoke: Pokemon) => {
      this.pokemons$ = this.pokemonService.getAllPoke();
    });
  }
  // Grabs favi pokes
  getFaviePoke()
}
