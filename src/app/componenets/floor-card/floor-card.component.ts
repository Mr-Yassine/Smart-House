import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/services/cards/card.service';
import { IFloor } from 'src/app/models/ifloor';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-floor-card',
  templateUrl: './floor-card.component.html',
  styleUrls: ['./floor-card.component.css']
})
export class FloorCardComponent implements OnInit {

  constructor(private cardService: CardService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getFloors();
    this.eventsSubscription = this.events.subscribe(() => this.getFloors());
  }

  floors : IFloor[] = []; 

  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;


  getFloors(){
    this.cardService.getFloors()
      .subscribe((floors: IFloor[]) => {this.floors = floors;
        console.log(this.floors);
      })
  }


  delete(id:any){
    this.cardService.deleteFloor(id)
    .subscribe(()=> {
      this.floors = this.floors.filter(floor => floor.id != id)
    })

    this._snackBar.open("Floor deleted successfully", "close");
  }
}
