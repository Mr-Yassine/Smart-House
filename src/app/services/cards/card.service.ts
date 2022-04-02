import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICards } from 'src/app/models/icards';

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
}
