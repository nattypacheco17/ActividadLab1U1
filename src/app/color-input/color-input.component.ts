import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ColorInputComponent {
  colorValue: string = '#333333';

  // Emisor del evento
  @Output() colorChange = new EventEmitter<string>();

  updateColor() {
    this.colorChange.emit(this.colorValue); 
  }
}
