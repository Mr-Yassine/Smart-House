import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards/card.service';
import { IRoom } from 'src/app/models/iroom';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  rooms : IRoom[] = []; 
  myRoom: IRoom = {
    room : ""
  }

  getRooms(){
    this.cardService.getRooms()
      .subscribe((rooms: IRoom[]) => {this.rooms = rooms;
        console.log(this.rooms);
      })
  }

  addRoom(){
    this.cardService.addRoom(this.myRoom)
      .subscribe((room)=> {
        this.rooms = [room, ...this.rooms];
      })

      this.myRoom.room = "";
  }

}
