import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  logoUrl: string;
  

  constructor() {
    this.title = "Teranet Internet Service Provider";
    this.logoUrl = "/assets/images/logoUrl.png";
  
  }
}
