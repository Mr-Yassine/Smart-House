import { Component, OnInit } from '@angular/core';
import { IDevices } from 'src/app/models/idevices';
import { CardService } from 'src/app/services/cards/card.service';


@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  devices : IDevices[] = []; 

  getDevices(){
    this.cardService.getDevices()
      .subscribe((devices: IDevices[]) => {this.devices = devices;
        console.log(this.devices);
      })
  }
}
