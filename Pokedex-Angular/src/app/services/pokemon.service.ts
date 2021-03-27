import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http : HttpClient
  ) { }

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10')
  }

  getMoreData(name : string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  getByIdPokemon(id : number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

}
