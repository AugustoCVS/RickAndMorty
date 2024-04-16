import { Component } from '@angular/core';
import { TitleComponent } from '../common/title/title.component';
import { InputComponent } from '../common/input/input.component';
import { NotFoundComponent } from '../common/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, InputComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  characterList = [{}];


  handleSearch({ value }: { value: string }): void {
    console.log('TESTE', value);
  }
}
