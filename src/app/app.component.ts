import {Component, Input, OnInit} from '@angular/core';
import {arrayMove} from './common/helpers/array-move';
import { Text } from './common/interfaces/text';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  public texts: Text[] = [];
   public textsSortState = false;

  ngOnInit(): void {
  }


  public onAddedText(el: HTMLInputElement): void {
    if (el.value !== '') {
      this.texts.push({name: el.value});
      el.value = '';
      return;
    }
    alert('Write Something');
  }


}

