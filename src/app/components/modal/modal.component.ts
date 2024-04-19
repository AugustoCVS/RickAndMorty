import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ICharacter } from '@app/@types/character.interface';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrl: 'modal.component.scss',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, NgOptimizedImage, NgIf, NgFor],
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICharacter) {}

  readonly characterInfo = [
    {
      title: 'Species:',
      value: this.data.name,
    },
    {
      title: 'Type:',
      value: this.data.type || '-',
    },
    {
      title: 'Gender:',
      value: this.data.gender || '-',
    },
    {
      title: 'Origin:',
      value: this.data.origin.name || '-',
    },
    {
      title: 'Location:',
      value: this.data.location.name || '-',
    },
    {
      title: 'Status:',
      value: this.data.status || '-',
    },
  ]
}
