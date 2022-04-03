import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CardService } from 'src/app/services/cards/card.service';
import { IDevices } from 'src/app/models/idevices';
import { IFloor } from 'src/app/models/ifloor';
import { IRoom } from 'src/app/models/iroom';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  links = ['Room', 'Devices', 'Floor'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  c1: boolean = false ; 
  c2: boolean = false ; 
  c3: boolean = false ; 


  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    if(this.activeLink == "Room") {
      this.c1 = true ; 
    } else if (this.activeLink == "Devices") {
      this.c2 = true ; 
    } else if (this.activeLink == "Floor") {
      this.c3 = true ; 
    }

    this.getDevices();
    this.getRooms();
    this.getFloors();
  }



  toggleBackground() {
    this.background = this.background ? undefined : 'accent';
  }

  switch(){
    if(this.activeLink == "Room") {
      this.c1 = true ; 
      this.c2 = false ; 
      this.c3 = false ; 
    } else if (this.activeLink == "Devices") {
      this.c1 = false ; 
      this.c2 = true ; 
      this.c3 = false ; 
    } else if (this.activeLink == "Floor") {
      this.c1 = false ; 
      this.c2 = false ; 
      this.c3 = true ; 
    }
  }



  devices : IDevices[] = []; 
  rooms : IRoom[] = []; 
  floors : IFloor[] = []; 

  myDevice: IDevices = {
    id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000),
    device : ""
  }
  myRoom: IRoom = {
    id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000),
    room : ""
  }
  myFloor: IFloor = {
    id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 1000),
    floor : ""
  }
  

  getDevices(){
    this.cardService.getDevices()
      .subscribe((devices: IDevices[]) => {this.devices = devices;
        console.log(this.devices);
      })
  }
  
  getRooms(){
    this.cardService.getRooms()
      .subscribe((rooms: IRoom[]) => {this.rooms = rooms;
        console.log(this.rooms);
      })
  }

  getFloors(){
    this.cardService.getFloors()
      .subscribe((floors: IFloor[]) => {this.floors = floors;
        console.log(this.floors);
      })
  }



  addDevice() {
   
    if (this.myDevice.device != "" ) {
      this.cardService.addDevice(this.myDevice)
      .subscribe((device)=> {        
        this.devices = [device, ...this.devices];
        console.log(this.devices);
      })

      this.myDevice.device = "";

    } else {
      alert("Please fill the field");
    }

    this.getDevices();  
  }



  addRoom(){
    if (this.myRoom.room != "" ) {
      this.cardService.addRoom(this.myRoom)
      .subscribe((room)=> {
        this.rooms = [room, ...this.rooms];
      })
      this.myRoom.room = "";

    } else {
      alert("Please fill the field");
    }
  }

  addFloor(){
    if (this.myFloor.floor != "" ) {
      this.cardService.addFloor(this.myFloor)
      .subscribe((floor)=> {
        this.floors = [floor, ...this.floors];
      })
      this.myFloor.floor = "";

    } else {
      alert("Please fill the field");
    }

    this.getFloors();
  }


}
