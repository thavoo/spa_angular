import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

      heroe:any = {};

  constructor( private _activatedRoute: ActivatedRoute,
                private _heroeService: HeroesService        
      ) { 

        this._activatedRoute.params.subscribe( params => {
            //console.log( params['id'] );
            this.heroe = this._heroeService.getHeroe( params['id'] );
            
        } );

  }

  ngOnInit() {
  }

}
