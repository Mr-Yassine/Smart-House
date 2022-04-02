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
    device : ""
  }
  myRoom: IRoom = {
    room : ""
  }
  myFloor: IFloor = {
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





  addDevice(){
    this.cardService.addDevice(this.myDevice)
      .subscribe((device)=> {
        this.devices = [device, ...this.devices];
      })

      this.myDevice.device = "";
  }

  addRoom(){
    this.cardService.addRoom(this.myRoom)
      .subscribe((room)=> {
        this.rooms = [room, ...this.rooms];
      })

      this.myRoom.room = "";
  }

  addFloor(){
    this.cardService.addFloor(this.myFloor)
      .subscribe((floor)=> {
        this.floors = [floor, ...this.floors];
      })

      this.myFloor.floor = "";
  }


}
