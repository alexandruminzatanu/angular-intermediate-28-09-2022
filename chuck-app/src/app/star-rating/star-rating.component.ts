import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: StarRatingComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: StarRatingComponent,
    },
  ],
})
export class StarRatingComponent implements ControlValueAccessor, Validator {
  @Input() count: number = 5;

  stars: number[] = [];
  score: number = 2;

  // These are here to know that they are functions and if they need parameters
  // They shouldn't countain any logic because it's lost when registerOnChange() is called when the component is created
  onChange = (score: number) => {};

  onTouched = () => {};

  touched: boolean = false;

  disabled: boolean = false;

  constructor() {
    for (let i = 0; i < this.count; i++) {
      this.stars.push(i + 1);
    }
  }

  changeScore(score: number): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.score = score;
      // We call this only when the value changes from our side (template)
      //    to update the formControl with the latest value
      // When the value changes from the formControl side, we have the writeValue() function for that
      this.onChange(this.score);
    }
  }

  writeValue(obj: any): void {
    this.score = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const score = control.value;
    if (score < 5) {
      return {
        mustBePerfect: {
          score: score,
        },
      };
    }

    return null;
  }
}
