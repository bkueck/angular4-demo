import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero } from 'app/components/heroes/model/hero.model';

@Injectable()
export class HeroSearchService {
	private heroesUrl = 'http://localhost:3000/heroes'; // URL to web api. Was: 'api/heroes';

	constructor(private http: Http) {

	}

	search(term: string): Observable<Hero[]> {
		return this.http // api/
			// Fuzzy search uses '?q=...'. Direct match on name uses '?name=...'
			.get(`${this.heroesUrl}?q=${term}`) // `heroes/?name=${term}`)
			// json-server:
			.map(response => response.json() as Hero[]);
	}
}

// https://www.codementor.io/ayushgupta/how-to-use-json-server-to-create-mock-apis-0-lci958ear
