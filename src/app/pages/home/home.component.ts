import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards/card.service';
import { ICards } from 'src/app/models/icards';
import { IDevices } from 'src/app/models/idevices';
import { IRoom } from 'src/app/models/iroom';
import { IFloor } from 'src/app/models/ifloor';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import * as uuid from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private cardService: CardService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getCards();
    this.getDevices();
    this.getRooms();
    this.getFloors();
  }


  eventsSubject: Subject<void> = new Subject<void>();


  devices : IDevices[] = [];
  getDevices(){
    this.cardService.getDevices()
      .subscribe((devices: IDevices[]) => {this.devices = devices;
        console.log(this.devices.length);
      })
  }


  rooms : IRoom[] = [];
  getRooms(){
    this.cardService.getRooms()
      .subscribe((rooms: IRoom[]) => {this.rooms = rooms;
        console.log(this.rooms);
      })
  }

  
  floors : IFloor[] = [];
  getFloors(){
    this.cardService.getFloors()
      .subscribe((floors: IFloor[]) => {this.floors = floors;
        console.log(this.floors);
      })
  }
 



  cards : ICards[] = []; 

  myCard: ICards = {
    id : uuid.v4(),
    device : "",
    room : "",
    floor : "",
    off : true,
    on : false,
    status : 'OFF',
  }


  getCards(){
    this.cardService.getCards()
      .subscribe((cards: ICards[]) => {this.cards = cards;
        console.log("cards" + this.cards);
      })
  }

  addCard() {
   
    if (this.myCard.device != "" && this.myCard.room != "" && this.myCard.floor != "") {
      this.cardService.addCard(this.myCard)
      .subscribe((card)=> {
        this.cards = [card, ...this.cards];
      })

      this._snackBar.open("Card added successfully", "close");

      this.myCard.device = "";
      this.myCard.room = "";
      this.myCard.floor = "";
      this.myCard.id = uuid.v4();
      this.eventsSubject.next();
      this.getCards();
      
    } else {
      alert("Please fill all the fields");
    }
   
  }


}
