import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards/card.service';
import { ICards } from 'src/app/models/icards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  bgColor: string;
  cards : ICards[] = [];
  


  constructor(private cardService: CardService) {
    this.bgColor = 'ffd7d7';
  }

  ngOnInit(): void {
    this.getCards();
  }


  getCards(){
    this.cardService.getCards()
      .subscribe((cards: ICards[]) => {this.cards = cards;
        console.log(this.cards);
      })
  }


  play(id:any) {

    this.cardService.getCard(id) 
      .subscribe((card: ICards) => {

        if(card.on){
          console.log(card.id);
          this.bgColor = '#ffd7d7';
          card.status = 'ON';
          card.off = false;
          card.on = true;

        } else {
          this.bgColor = '#f1ffe8';
          card.status = 'OFF';
          card.off = true;
          card.on = false;
        }

        console.log(card);

      })  

  }


  

  removeCard(id:any): void{
    this.cardService.deleteCard(id)
      .subscribe(() => {
        this.cards = this.cards.filter(card => card.id !== id);
      })
  }

}
