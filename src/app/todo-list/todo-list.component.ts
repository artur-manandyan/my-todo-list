import {Component, Input, OnInit} from '@angular/core';
import {arrayMove} from '../common/helpers/array-move';
import {Text} from '../common/interfaces/text';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() texts: Text[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public onDeleteItem(index: number): void {
    this.texts.splice(index, 1);
  }

  public onSelectItem(text: Text): void {
    text.active = !text.active;
  }

  public onChangePosition(event: MouseEvent, index: number): void {
    event.stopPropagation();
    arrayMove(this.texts, index, index - 1);
  }


}
