import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Route[] = [
  { path: '', component: HomepageComponent },
  {
    path: 'masini',
    component: HomepageComponent,
  },
  {
    path: 'contact',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
