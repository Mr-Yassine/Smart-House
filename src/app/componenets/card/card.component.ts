import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/services/cards/card.service';
import { ICards } from 'src/app/models/icards';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards : ICards[] = [];
  
  
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;

  constructor(private cardService: CardService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getCards();
    this.eventsSubscription = this.events.subscribe(() => this.getCards());
  }


  getCards(){
    this.cardService.getCards()
      .subscribe((cards: ICards[]) => {this.cards = cards;
        console.log(this.cards);
      })
  }

  play(card: ICards){
    this.cardService.updateCard(card)

    .subscribe(() => {
      if (card.off){
        card.off = false;
        card.on = true;
        card.status = 'ON';
      }
      else{
        card.off = true;
        card.on = false;
        card.status = 'OFF';
      }
        console.log(card);
    })
  }


  removeCard(id:any): void{
    this.cardService.deleteCard(id)
      .subscribe(() => {
        this.cards = this.cards.filter(card => card.id !== id);
      })

      this._snackBar.open("Card deleted successfully", "close");
  }

}
