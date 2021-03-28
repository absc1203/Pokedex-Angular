import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-tabela',
  templateUrl: './poke-tabela.component.html',
  styleUrls: ['./poke-tabela.component.css']
})
export class PokeTabelaComponent implements OnInit {

  pokemons: any[] = []
  key = 'id'
  reverse = false
  page = 1
  totalPokemons: number = this.pokemons.push()

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void{
    this.getPokemons()
  }

  getPokemons(){
    this.pokemonService.getPokemons(10, this.page + (-1))
      .subscribe((resp:any) => {
        this.totalPokemons = resp.count
        resp.results.forEach((result:any) => {
          this.pokemonService.getMoreData(result.name)
          .subscribe((resp:any)=> {
            this.pokemons.push(resp);
        })
      });
      console.log(resp)
    })
    
  }

  nextPage(event:any){
    this.page = event
  }
      


}
