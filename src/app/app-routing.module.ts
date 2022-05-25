import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessconceptComponent } from './businessconcept/businessconcept.component';
import { ContactComponent } from './contact/contact.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { HomeComponent } from './home/home.component';
import { RootformComponent } from './rootform/rootform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rootform',
    component: RootformComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'businessconcept',
    component: BusinessconceptComponent
  },
  {
    path: 'gdpr',
    component: GdprComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
