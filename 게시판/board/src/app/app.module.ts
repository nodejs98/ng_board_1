import { BoardServiceService } from './boardfolder/board-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
 
import { BoardListComponent } from "app/boardfolder/board-list/board-list.component";
import { BoardItemComponent } from './boardfolder/board-list/board-item/board-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BoardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
