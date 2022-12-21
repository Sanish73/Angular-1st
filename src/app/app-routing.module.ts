import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './MyComponent/todo/todo.component';



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
  // {
  //   path:'photo-gallery',
  //   component:PhotoGalleryComponent
  // },
  {
    path:'MyComponent/todo',
    component:TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
