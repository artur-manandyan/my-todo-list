import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Text} from '../common/interfaces/text';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public textsSortState = false;
  @ViewChild('inputElementRef') inputElementRef!: ElementRef;
  @Output() submit$ = new EventEmitter<Text>();
  @Output() revers$ = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onAddingText(): void {
    if (this.inputElementRef.nativeElement.value !== '') {
      this.submit$.emit({name: this.inputElementRef.nativeElement.value});
      this.inputElementRef.nativeElement.value = '';
      return;
    }
    alert('write something');
  }

  public onReversText(): void {
    this.textsSortState = !this.textsSortState;
    this.revers$.emit();
  }

}

