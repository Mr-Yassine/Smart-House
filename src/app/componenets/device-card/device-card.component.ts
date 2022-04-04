import { Component, OnInit, Input } from '@angular/core';
import { IDevices } from 'src/app/models/idevices';
import { CardService } from 'src/app/services/cards/card.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';






@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {

  constructor(private cardService: CardService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDevices();
    this.eventsSubscription = this.events.subscribe(() => this.getDevices());
  }

  devices : IDevices[] = []; 

  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;

  getDevices(){
    this.cardService.getDevices()
      .subscribe((devices: IDevices[]) => {this.devices = devices;
        console.log(this.devices);
      })
  }

  delete(id:any){
    this.cardService.deleteDevice(id)
    .subscribe(() => {
      this.devices = this.devices.filter(device => device.id !== id)
    })

    this._snackBar.open("Device deleted successfully", "close");
  }
}
