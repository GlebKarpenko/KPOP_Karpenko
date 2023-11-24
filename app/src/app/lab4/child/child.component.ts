import { Component , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [FormsModule]
})

export class ChildComponent {
  minMaxDif: number = 0;
  @Input() inputArray: number[] = [];

  ngOnInit(){
    const minElement = Math.min(...this.inputArray);
    const maxElement = Math.max(...this.inputArray);
    this.minMaxDif = maxElement - minElement;
  }
}
