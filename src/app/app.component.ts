import { Component } from '@angular/core';
import { ColorInputComponent } from './color-input/color-input.component';
import { ColorButtonComponent } from './color-button/color-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ColorInputComponent, ColorButtonComponent]
})
export class AppComponent {
  selectedColor: string = '#333333';

  onColorChange(newColor: string) {
    this.selectedColor = newColor; 
  }
}
