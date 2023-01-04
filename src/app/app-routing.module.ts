import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { SanishComponent } from './sanish/sanish.component';



const routes: Routes = [

 
  // {
  //   path:'achivements',
  //   component:AchivementsComponent
  // },
  // {
  //   path:'contact',
  //   component:ContactComponent
  // },
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
  {
    path:'sanish',
    component:SanishComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
