import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '../../services/poke-api.service';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {

  PokemonDescription:any = [];

  constructor(
    private routeActive: ActivatedRoute,
    private PokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    const name = this.routeActive.snapshot.paramMap.get('name');
    this.PokeService.getPokemon(name || '').subscribe(data => {
      this.PokemonDescription = data;
      console.log(data);
    })
    console.log(name);
  }

}
