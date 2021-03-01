import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  Data:any = [];

  constructor( 
    private PokeAPIService: PokeAPIService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.PokeAPIService.getPokemons().subscribe(pokemons => {
      console.log(pokemons);
      this.Data = pokemons;
    })
  }

  showPoke(name:string){
    this.router.navigateByUrl(`pokemons/${name}`);
  }
}
