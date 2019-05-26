import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroefirt',
  templateUrl: './heroefirt.component.html',
  styleUrls: ['./heroefirt.component.css']
})
export class HeroefirtComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private _heroeService: HeroesService,
               private _activedRoute: ActivatedRoute
    ) {
      
      
      this._activedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroeService.searchHeroes( params['termino'] );
        //console.log(this.heroe);
    } );
    }

  ngOnInit() {

  }

}
