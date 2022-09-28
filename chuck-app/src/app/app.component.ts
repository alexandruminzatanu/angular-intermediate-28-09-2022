import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  cardTitle: string = '';
  displayCard: boolean = false;
  jokeArray: string[] = ['joke1', 'joke2', 'joke3'];

  ngOnInit(): void {
    setTimeout(()=>{
      this.cardTitle = 'New title';
    }, 3000);
  }

  buttonClicked(event:any){
    console.log(event);
  }

  showCard(){
    this.displayCard = true;
  }
}
