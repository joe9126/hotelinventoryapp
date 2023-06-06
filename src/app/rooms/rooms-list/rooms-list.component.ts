import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomsList} from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms : RoomsList[] = []; // recieves data input to be rendered on view

  @Output() selectedRoom = new EventEmitter<RoomsList>(); // receives output from view to be acted upon in the parent component
  
  constructor(){}

  ngOnInit(): void { }

  selectRoom(room : RoomsList){
    this.selectedRoom.emit(room);
  }
}
