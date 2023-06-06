import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { Room, RoomsList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  numberofRooms: number = 120;
  /*availableRooms: number = 105;
  bookedRooms: number = 15;*/

  hideRooms : boolean = false;

  rooms: Room =  { 
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms:5
  }

  roomsList : RoomsList[] = [ ];
    
  selectedRoom! : RoomsList;

  app = new AppComponent();

  hotelname = this.app.hotelname;

  constructor(){}

  ngOnInit(): void{
   this.roomsList = [
    {
      roomid:23,
      roomType:" Deluxe",
      amenities: " Hot bath, concierge, room service",
      checkindate: new Date("2023-06-08"),
      checkoutdate: new Date("2023-06-12"),
      price: 500,
      rating: 4.3
    },
    {
      roomid:24,
      roomType:" Deluxe VIP",
      amenities: " Hot bath, concierge, room service",
      checkindate: new Date("2023-06-08"),
      checkoutdate: new Date("2023-06-12"),
      price: 1000,
      rating: 3.2
    },
    {
      roomid:25,
      roomType:" Presidential",
      amenities: " Hot bath, concierge, room service",
      checkindate: new Date("2023-06-08"),
      checkoutdate: new Date("2023-06-12"),
      price: 1500,
      rating:6.5
    }
   ];
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room : RoomsList){
    this.selectedRoom = room;
    //console.log(room);
  }
}
