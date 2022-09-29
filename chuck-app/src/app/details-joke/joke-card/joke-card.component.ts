import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit, OnChanges {

  @Input() title: string = 'Some title';
  @Output() likeClicked: EventEmitter<string> = new EventEmitter();

  today: Date = new Date();

  joke = {
    title: 'Joke title',
    content: 'Chuck Norris is recommending all his friends buy a boat because Zombies can not swim'
  };

  constructor() { }

  ngOnInit(): void {
    console.log('component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onLikeClick() {
    this.likeClicked.emit('like clicked');
  }
}
