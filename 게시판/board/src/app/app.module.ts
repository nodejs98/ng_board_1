import { BoardServiceService } from './boardfolder/board-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
 
import { BoardListComponent } from "./boardfolder/board-list/board-list.component";
import { BoardItemComponent } from './boardfolder/board-list/board-item/board-item.component';
import { BoardWriteComponent } from './boardfolder/board-write/board-write.component';
import { BoardReadComponent } from './boardfolder/board-read/board-read.component';
import { CommentListComponent } from './boardfolder/comment-list/comment-list.component';
import { CommentItemComponent } from './boardfolder/comment-list/comment-item/comment-item.component';
import { QuillModule } from 'ngx-quill';
import { BoardEditorComponent } from './boardfolder/board-editor/board-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardItemComponent,
    BoardWriteComponent,
    BoardReadComponent,
    CommentListComponent,
    CommentItemComponent,
    BoardEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,

    QuillModule
  ],
  providers: [BoardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
