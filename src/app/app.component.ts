import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'WebApplicationTraining';
  constructor(){
    setTimeout(() => {
      this.name = "Sanish Thapa"
    }, 2000);
  }
}
