import {Component, OnInit} from '@angular/core';
import {Text} from './common/interfaces/text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  public texts: Text[] = [];

  ngOnInit(): void {
  }

  public onAddedText(text: Text): void {
    this.texts.push(text);
  }

  public reversText(): void {
    this.texts.reverse();
  }

}
