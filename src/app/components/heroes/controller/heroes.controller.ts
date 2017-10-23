import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/components/heroes/model/hero.model';
//import { HeroDetailComponent } from 'app/components/hero-detail/controller/hero-detail.component';
import { HeroService } from 'app/components/heroes/service/hero.service';
import { Router } from '@angular/router';

/**
 * The Heroes tutorial is really weird, because it encourages mixing CSS & HTML into the .ts (typescript) file.
 * The default install does contain an example of an external style .css file & an external template .html file.
 * So just be aware that if you are running through their tutorials, they are teaching you the wrong way to build apps.
 * Otherwise, it's like mixing <style>..</style> and <script>..</script> tags into your <html>..</html> tags.
 * Really? We use <link> & a single <script src="..."></script> tag, instead of <style> and <script> without a src attribute.
 */
@Component({
  selector: 'my-heroes',
  providers: [],
  templateUrl: '../view/heroes.view.html',
  styleUrls: ['../styles/heroes.css']//,
  /* Use the styleUrls file above, but don't do this non-sense here:
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    ...
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  */

  /* Use the templateUrl file above, but don't do this non-sense here:
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  ` */
})

/**
 * This is interesting. You can mix both JS notation & JSON notation in TS.
 * This is a JSON class definition. We can't use console.log in this. It's like mixing it inside of
 * a {'json':property, console.log('...');} object. See how that doesn't work in native JS?
 */
export class HeroesComponent implements OnInit {
  /*
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  */
  heroes: Hero[];
  selectedHero: Hero;

  /**
   * This is the default function for each class. Note: console.log lines have to be inside of a
   * method & can't be used in the "JSON" class definition itself.
   */
  constructor(
    private router: Router,
    private heroService: HeroService
  ) {
    // console.log(heroService);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // Functions don't need to use the "function" keyword, like they do in TypeScript.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
