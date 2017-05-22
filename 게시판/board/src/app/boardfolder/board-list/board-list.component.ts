import { BoardServiceService } from './../board-service.service';
import { Component, OnInit } from '@angular/core';

import { boardData } from './../boardData.model';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
 boardDatas : boardData[];


  constructor(private boardservice : BoardServiceService) { 
    
  }

 

  ngOnInit() {
    this.boardDatas = this.boardservice.getBoardDatas();
  }

}
