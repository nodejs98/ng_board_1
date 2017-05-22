import { boardData } from './../../boardData.model';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  @Input() boardData: boardData;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
