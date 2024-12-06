import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css'],
  standalone: true,
})
export class ColorButtonComponent {
  @Input() buttonColor: string = '#333333';
}
