import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards/card.service';
import { IFloor } from 'src/app/models/ifloor';

@Component({
  selector: 'app-floor-card',
  templateUrl: './floor-card.component.html',
  styleUrls: ['./floor-card.component.css']
})
export class FloorCardComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getFloors();
  }

  floors : IFloor[] = []; 


  getFloors(){
    this.cardService.getFloors()
      .subscribe((floors: IFloor[]) => {this.floors = floors;
        console.log(this.floors);
      })
  }


}
