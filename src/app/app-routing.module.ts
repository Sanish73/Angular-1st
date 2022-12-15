import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [

  {
    path:'about',
    component:AboutComponent 
  },
  {
    path:'achivements',
    component:AchivementsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'photo-gallery',
    component:PhotoGalleryComponent
  },
  {
    path:'services',
    component:ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
