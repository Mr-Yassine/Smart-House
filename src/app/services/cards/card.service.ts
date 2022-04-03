import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICards } from 'src/app/models/icards';
import { IDevices } from 'src/app/models/idevices';
import { IFloor } from 'src/app/models/ifloor';
import { IRoom } from 'src/app/models/iroom';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }



  constructor(private http:HttpClient) { } 

  getCards(): Observable<any>{
    return this.http.get<ICards[]>('http://localhost:3000/cards');
  }

  getCard(id:number){
    return this.http.get<ICards>('http://localhost:3000/cards/'+id);
  }

  addCard(card:ICards){
    return this.http.post<ICards>('http://localhost:3000/cards',card)

      .pipe (
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  updateCard(card:ICards){
    return this.http.patch('http://localhost:3000/cards/'+card.id,card);
  }

  deleteCard(id:number){
    return this.http.delete('http://localhost:3000/cards/'+id);
  }



  getDevices():Observable<any>{
    return this.http.get<IDevices[]>('http://localhost:3000/devices');
  }

  getDevice(id:number){
    return this.http.get<IDevices>('http://localhost:3000/devices/'+id);
  }

  addDevice(device:IDevices){
    return this.http.post<IDevices>('http://localhost:3000/devices',device)

    .pipe (
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  updateDevice(device:IDevices){
    return this.http.put('http://localhost:3000/devices/'+device.id,device);
  }

  deleteDevice(id:number){
    return this.http.delete('http://localhost:3000/devices/'+id);
  }




  getRooms():Observable<any>{
    return this.http.get<IRoom[]>('http://localhost:3000/rooms');
  }

  getRoom(id:number){
    return this.http.get<IRoom>('http://localhost:3000/rooms/'+id);
  }

  addRoom(room:IRoom){
    return this.http.post<IRoom>('http://localhost:3000/rooms',room)

    .pipe (
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  updateRoom(room:IRoom){
    return this.http.put('http://localhost:3000/rooms/'+room.id,room);
  }

  deleteRoom(id:number){
    return this.http.delete('http://localhost:3000/rooms/'+id);
  }




  getFloors():Observable<any>{
    return this.http.get<IFloor[]>('http://localhost:3000/floors');
  }

  getFloor(id:number){
    return this.http.get<IFloor>('http://localhost:3000/floors/'+id);
  }

  addFloor(floor:IFloor){
    return this.http.post<IFloor>('http://localhost:3000/floors',floor)

    .pipe (
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  updateFloor(floor:IFloor){
    return this.http.put('http://localhost:3000/floors/'+floor.id,floor);
  }

  deleteFloor(id:number){
    return this.http.delete('http://localhost:3000/floors/'+id);
  }
  
}
