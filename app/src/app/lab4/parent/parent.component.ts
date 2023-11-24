import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [FormsModule]
})
export class ParentComponent {
  inputText: string = '';
  numbers: Array<number> = [];
  errorMessage: string = '';

  readArray(){
    const textArray: string[] = this.inputText.split(',');
    this.numbers = textArray.map(Number).filter((value) => !isNaN(value));

    if (!this.inputIsValid()){
      this.errorMessage = 'Invalid input array. Check values to be numeric and separated by coma.';
      this.numbers = [];
      return;
    }
  }

  inputIsValid(): boolean {
    return Array.isArray(this.numbers) && this.numbers.length >= 2;
  }
}
