import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICards } from 'src/app/models/icards';
import { IDevices } from 'src/app/models/idevices';
import { IFloor } from 'src/app/models/ifloor';
import { IRoom } from 'src/app/models/iroom';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  getCards():any{
    return this.http.get<ICards[]>('http://localhost:3000/cards');
  }

  getCard(id:number){
    return this.http.get<ICards>('http://localhost:3000/cards/'+id);
  }

  addCard(card:ICards){
    return this.http.post<ICards>('http://localhost:3000/cards',card);
  }

  updateCard(card:ICards){
    return this.http.put('http://localhost:3000/cards/'+card.id,card);
  }

  deleteCard(id:number){
    return this.http.delete('http://localhost:3000/cards/'+id);
  }





  getDevices():any{
    return this.http.get<IDevices[]>('http://localhost:3000/devices');
  }

  getDevice(id:number){
    return this.http.get<IDevices>('http://localhost:3000/devices/'+id);
  }

  addDevice(device:IDevices){
    return this.http.post<IDevices>('http://localhost:3000/devices',device);
  }

  updateDevice(device:IDevices){
    return this.http.put('http://localhost:3000/devices/'+device.id,device);
  }

  deleteDevice(id:number){
    return this.http.delete('http://localhost:3000/devices/'+id);
  }




  getRooms():any{
    return this.http.get<IRoom[]>('http://localhost:3000/rooms');
  }

  getRoom(id:number){
    return this.http.get<IRoom>('http://localhost:3000/rooms/'+id);
  }

  addRoom(room:IRoom){
    return this.http.post<IRoom>('http://localhost:3000/rooms',room);
  }

  updateRoom(room:IRoom){
    return this.http.put('http://localhost:3000/rooms/'+room.id,room);
  }

  deleteRoom(id:number){
    return this.http.delete('http://localhost:3000/rooms/'+id);
  }




  getFloors():any{
    return this.http.get<IFloor[]>('http://localhost:3000/floors');
  }

  getFloor(id:number){
    return this.http.get<IFloor>('http://localhost:3000/floors/'+id);
  }

  addFloor(floor:IFloor){
    return this.http.post<IFloor>('http://localhost:3000/floors',floor);
  }

  updateFloor(floor:IFloor){
    return this.http.put('http://localhost:3000/floors/'+floor.id,floor);
  }

  deleteFloor(id:number){
    return this.http.delete('http://localhost:3000/floors/'+id);
  }
  
}
