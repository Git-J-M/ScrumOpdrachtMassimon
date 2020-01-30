import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/model/pokemon';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemon$: Observable<Pokemon[]>;
  public pokemonDetail$: Observable<any[]>;

  PokemonPhoto = `https://img.pokemondb.net/artwork/`;
  image = `.jpg`;

  constructor(private pokemonService: PokemonService) { }

  addFavie(value) {
    console.log(value.name);
    this.pokemonDetail$ = this.pokemonService.addFavie(value.url);
    this.pokemonDetail$.subscribe(res => this.addFavieDetail(res)
    );
  }

  addFavieDetail(faviedetails) {
    // id === null, omdat deze auto wordt ingevuld door de json server
    console.log('dit zijn de detail'+faviedetails);
    const newPokiesJSON = new Pokemon(null, faviedetails.name, faviedetails.type);
    this.pokemonService.addFavieJSON(newPokiesJSON)
      .subscribe((addedPokemon: Pokemon) => {
        // pokemons opnieuw ophalen in de subscription
        this.pokemon$ = this.pokemonService.getPokemon();
      });
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokeApi();
    this.pokemon$.subscribe(res => { console.log(res); });
  }

}
