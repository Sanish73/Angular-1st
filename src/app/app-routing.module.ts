import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  // {
  //   path:'about',
  //   component:AboutComponent 
  // },
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
  // {
  //   path:'services',
  //   component:ServicesComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
