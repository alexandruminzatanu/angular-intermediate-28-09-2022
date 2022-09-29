import { Component, OnInit } from '@angular/core';
import { ChuckService } from './chuck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  cardTitle: string = '';
  displayCard: boolean = false;
  jokeArray: string[] = ['joke1', 'joke2', 'joke3'];

  counter: number = 0;
  constructor(private chuckService: ChuckService) {

  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.cardTitle = 'New title';
    }, 3000);
  }

  buttonClicked(event:any){
   this.chuckService.getCategories().subscribe((data)=>{
    console.table(data);
   },(err) => {
    console.error(err);
   }, () => {
    console.log('COMPLETE');
   });
  }

  showCard() {
    this.displayCard = true;
    this.counter++;
  }
}
