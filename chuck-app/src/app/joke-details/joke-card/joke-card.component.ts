import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit {

  title:string = 'Some title';

  today: Date = new Date();

  joke = {
    title: 'Joke title',
    content: 'Chuck Norris is recommending all his friends buy a boat because Zombies can not swim'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
