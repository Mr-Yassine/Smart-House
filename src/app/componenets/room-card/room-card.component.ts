import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards/card.service';
import { IRoom } from 'src/app/models/iroom';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  constructor(private cardService: CardService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getRooms();
  }

  rooms : IRoom[] = []; 

  getRooms(){
    this.cardService.getRooms()
      .subscribe((rooms: IRoom[]) => {this.rooms = rooms;
        console.log(this.rooms);
      })
  }

  delete(id: any){
    this.cardService.deleteRoom(id)
    .subscribe(() => {
      this.rooms = this.rooms.filter(room => room.id !== id)
    })

    this._snackBar.open("Room deleted successfully", "close");
  }
}
