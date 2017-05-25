import { OnInit } from '@angular/core';
import { Component, ElementRef, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged';

// override p with div tag
import * as Quill from 'quill';

// const Parchment = Quill.import('parchment');
// let Block = Parchment.query('block');

// Block.tagName = 'DIV';
// // or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
// Quill.register(Block /* or NewBlock */, true);

import Counter from './counter';
Quill.register('modules/counter', Counter)

@Component({
  selector: 'app-board-editor',
  templateUrl: './board-editor.component.html',
  styleUrls: ['./board-editor.component.css']
})
export class BoardEditorComponent implements OnInit {

  title = 'Quill works!';
  isReadOnly = false;
  form: FormGroup;

  constructor(fb: FormBuilder, private elementRef: ElementRef, private http: Http) {
    this.form = fb.group({
      editor: ['test']
    });

    // quilleditor.quillEditor.getModule("toolbar").addHandler("image",this.testimage);
  }

  @ViewChild('editor') editor: QuillEditorComponent

  ngOnInit() {
    console.log(this.form)
    this.form
      .controls
      .editor
      .valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(data => {
        console.log('value changes')
      });

    // console.log(this.form.controls.editor.getModule("toolbar").addHandler("image",this.testimage));


  }


  patchValue() {
    this.form.controls['editor'].patchValue(`${this.form.controls['editor'].value} <img src="http://i.imgur.com/2Def4XP.gif">`)
  }

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
  }

  logChange($event: any) {
    console.log($event);
  }

  logSelection($event: any) {
    console.log($event);
  }
  upload() {
    var IMGUR_CLIENT_ID = '9f8b678ca9ad9ab';
    var IMGUR_API_URL = 'https://api.imgur.com/3/image';
    let inputEl = this.elementRef.nativeElement.querySelector("#testFile");
    console.dir(inputEl);
    if (inputEl.files.length == 0) return;

    let files: FileList = inputEl.files;
    const formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', IMGUR_API_URL, true);
    xhr.setRequestHeader('Authorization', 'Client-ID ' + IMGUR_CLIENT_ID);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        if (response.status === 200 && response.success) {
  
              document.querySelector("quill-editor div.ql-editor").innerHTML
               = document.querySelector("quill-editor div.ql-editor").innerHTML+ '<img src="'+response.data.link+'">';
        } else {

        }
      }
    }
    xhr.send(formData);
  }

  // this.http
  //     .post('/api/test/fileupload', formData)
  //     .subscribe();
}
