import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/components/heroes/model/hero.model';
import { HeroService } from 'app/components/heroes/service/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
      this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
  }
