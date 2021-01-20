import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Text} from '../common/interfaces/text';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public textsSortState = false;
  @Input() public texts: Text[] = [];
  @ViewChild('inputElementRef') inputElementRef: ElementRef;
  @Output() addingText = new EventEmitter<Text>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddingText(): void {
    const inputValue = this.inputElementRef.nativeElement.value;
    this.addingText.emit(inputValue);
  }

  public onReversText(): void {
    this.textsSortState = !this.textsSortState;
    this.texts.reverse();
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
