import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = "";
  @Input() value: string = "";
  @Output() searchValue = new EventEmitter<string>();

  onInput({event}: {event: Event}): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchValue.emit(value);
  }  
}
