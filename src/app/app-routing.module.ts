import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
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
