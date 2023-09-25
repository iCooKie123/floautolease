import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MasiniComponent } from './pages/masini/masini.component';
import { TestpageComponent } from './pages/testpage/testpage.component';
import { ServiciiComponent } from './pages/servicii/servicii.component';

const routes: Route[] = [
  { path: '', component: HomepageComponent },
  {
    path: 'masini',
    component: MasiniComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'servicii',
    component: ServiciiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], //! useHash:true is for github pages
  exports: [RouterModule],
})
export class AppRoutingModule {}
