import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pokemon } from '../shared/model/pokemon';
import { PokemonService } from 'src/shared/services/pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  public pokemon$: Observable<Pokemon[]>;
<<<<<<< Updated upstream
  // currentpokemon$: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {this.pokemon$ = this.pokemonService.getPokemon(); }
  getPokemon(id: number) {console.log('check'); }
  // addFavie(pokemonName: string, pokemonType: string) {
  //   const newPoke = new Pokemon(null, pokemonName, pokemonType);
  //   this.pokemonService.addFavie(newPoke)
  //   .subscribe((addFavie: Pokemon) => {
  //     this.pokemon$ = this.pokemonService.getPokemon();
  //   }); }

    deleteFaviePoke() {
      // TODO
    }
}
=======
  currentpokemon$: Observable<Pokemon>;
constructor(private pokemonService: PokemonService){}
ngOnInit(){};

// addFavie()
// getPokemon(): Observable<Pokemon[]> {
//   return this.http
//     .get<Pokemon[]>(this.urllocal)
//     .pipe(tap(result => console.log('via json-server: ', result)));
// }
// getPokeApi(): Observable<Pokemon[]> {
//   return this.http.get<Pokemon[]>(this.url).pipe(map(res => res['results']));
// }
// addFavie(value): Observable<any[]> {
//   const headers = new HttpHeaders().set('Content-type', 'application/json');
//   return this.http.get<any[]>(value).pipe();
// }

// addFavieJSON(value): Observable<any> {
//   const headers = new HttpHeaders().set('Content-type', 'application/json');
//   return this.http.post(this.urllocal, value, { headers: headers });
// }
// deleteFavieJSON(value): Observable<any> {
//   const headers = new HttpHeaders().set('Content-type', 'application/json');
//   return this.http.delete(value, { headers: headers });
//   // url verwijdert. Mogelijk moest een andere waarde niet mee worden gegeven
// }
// }

// }
>>>>>>> Stashed changes
























// export class AppComponent implements OnInit {
//   countries$: Observable<Country[]>;
//   currentcountry$: Observable<Country>
//   constructor(private countryService  : CountryService) {}
//   ngOnInit() {this.countries$ = this.countryService.getCountries();}
//   getCountry(id  : number) {console.log('boo');}
//   // Land toevoegen --> doorgeven aan de service
//   addCountry (countryName  : string, continentName  : string) {
//     // id === null, omdat deze auto wordt ingevuld door de json server
//     const newCountry = new Country(null, countryName, continentName);
//     this.countryService.addCountry(newCountry)
//     .subscribe ((addedCountry  : Country) => {
//       // countries opnieuw ophalen in de subscription
//       this.countries$ = this.countryService.getCountries();
//     }); }
//     // Land verwijderen --> doorgeven aan de service
<<<<<<< Updated upstream
//     deleteCountry (country  : Country) {   //TODO
//     } }
=======
//     deleteCountry (country  : Country) {   //TODO 
//     }
} 
>>>>>>> Stashed changes
