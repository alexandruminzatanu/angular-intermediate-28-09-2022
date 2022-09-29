import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-category-joke',
  templateUrl: './category-joke.component.html',
  styleUrls: ['./category-joke.component.scss']
})
export class CategoryJokeComponent implements OnInit, OnDestroy {
  public currentCategoryId: string = '';
  private subs$: Subscription = new Subscription();
  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    const id: Observable<string> = activatedRouter.params.pipe(map(p => p['id']));
    id.subscribe((id: string) => {
      //console.log(id);
    })
  }

  ngOnInit(): void {
    this.subs$.add(this.activatedRouter.paramMap.subscribe((data: any) => {
      this.currentCategoryId = data.params.id;
    }));
    this.subs$.add(this.activatedRouter.queryParamMap.subscribe((data: any) => {
      // console.log(data);
    }));

    this.subs$.add(this.router.events.subscribe((data)=>{
      console.log(data);
    }));

  }

  goToHome() {
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
   this.subs$.unsubscribe();
  }

}
