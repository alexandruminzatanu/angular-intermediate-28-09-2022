import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {

  joke: string = 'some value';
  author: string = '';

  jokeForm: FormGroup = new FormGroup({
    'author': new FormControl('some value', [Validators.required, this.valueValidator()]),
    'joke': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'rating': new FormControl(7)
  });

  constructor() { }

  ngOnInit(): void {
    this.jokeForm.controls['joke'].statusChanges.subscribe(value => console.log(value));
    this.jokeForm.controls['rating'].disable();
  }

  showJoke(value: string){
    console.log(value);
  }

  onSubmit(newJokeForm: any){
    console.log(newJokeForm);
  }

  onSubmitReactive() {
    console.log(this.jokeForm);
  }

  valueValidator(): ValidatorFn {
    return (control: AbstractControl): null | ValidationErrors => {
      const isValid = control.value === 'bruce';
      return isValid ? null : { 'invalidValue': {  } };
    }
  }
}
