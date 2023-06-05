import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  numberofRooms: number = 120;
  availableRooms: number = 105;
  bookedRooms: number = 15;

  hideRooms : boolean = false;

  app = new AppComponent();

  hotelname = this.app.hotelname;

  constructor(){}

  ngOnInit(): void{}

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
