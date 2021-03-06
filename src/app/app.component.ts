import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart_House';

  showMenu : boolean = false;

  constructor(router: Router){

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showMenu = event.url != '/login' && event.url != '/register' && event.url != '/';
      }
    }); 
  }
}
