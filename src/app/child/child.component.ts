import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public fruit;
  @Output() favouriteFruit = new EventEmitter<string>();

  onClick(data: string) {
    this.favouriteFruit.emit(data);
    console.log(data);
  }
}
