import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-host.component.html',
  styleUrl: './dynamic-host.component.scss'
})
export class DynamicHostComponent {
  @Input() dynamicComponent: any;
}
