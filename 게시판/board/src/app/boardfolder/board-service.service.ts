import { boardData } from './boardData.model';

import { Injectable } from '@angular/core';


@Injectable()
export class BoardServiceService {




  private boardDatas : boardData[] = [

    new boardData(1,"글 제목","이용자",new Date(),10,1,10),
    new boardData(2,"글 제목2","이용자2",new Date(),4,1,333)
  ]

  constructor() { }

  getBoardDatas() {
    return this.boardDatas.slice();
  }
 
}
