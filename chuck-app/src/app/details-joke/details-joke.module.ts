import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsJokeRoutingModule } from './details-joke-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { SuffixPipe } from './suffix.pipe';

@NgModule({
  declarations: [JokeCardComponent, SuffixPipe],
  imports: [
    CommonModule,
    DetailsJokeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DetailsJokeModule { }
