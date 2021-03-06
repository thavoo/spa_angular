import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import {APP_ROUTING} from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// servicios
import { HeroesService } from './services/heroes.services';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroefirtComponent } from './components/heroefirt/heroefirt.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroefirtComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
