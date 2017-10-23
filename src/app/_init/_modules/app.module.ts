// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { RoutesModule } from 'app/_init/_modules/routes.module';

// Services
import { HeroService } from 'app/components/heroes/service/hero.service';

// Component Controllers
import { AppComponent } from 'app/_init/_components/app.component';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { HeroDetailComponent } from 'app/components/hero-detail/hero-detail.controller';
import { HeroesComponent } from 'app/components/heroes/controller/heroes.controller';
import { HeroSearchComponent } from 'app/components/search/controller/hero-search.controller';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [HeroService],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
