import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Route } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
