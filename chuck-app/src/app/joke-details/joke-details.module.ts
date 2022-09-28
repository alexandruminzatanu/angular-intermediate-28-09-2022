import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { SuffixPipe } from './suffix.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [JokeCardComponent, SuffixPipe],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [JokeCardComponent],
})
export class JokeDetailsModule {}
