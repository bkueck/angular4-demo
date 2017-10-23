import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { HeroDetailComponent } from 'app/components/hero-detail/hero-detail.controller';
import { HeroesComponent } from 'app/components/heroes/controller/heroes.controller';

const routes: Routes = [
	{
	  path: 'dashboard',
	  component: DashboardComponent
	},
	{
	  path: 'heroes',
	  component: HeroesComponent
	},
	{
	  path: 'hero/:id', // AKA: heroes/detail/:id
	  component: HeroDetailComponent
	},
	{
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class RoutesModule {}
