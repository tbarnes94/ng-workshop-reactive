import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NewBookConstants } from "./new-book-constants";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
  providers: [NewBookConstants]
})
export class NewBookComponent implements OnInit {

  book:IBook;
  rForm:FormGroup;

  constructor(private _fb:FormBuilder, private _dialogRef: MdDialogRef<NewBookComponent>, public newBookConstants:NewBookConstants) {
    this.rForm = _fb.group({
      'title': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'author': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'rating': [null, Validators.required],
      'isCheckedOut': [null],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.book = {
      id: 0,
      title: '',
      author: '',
      isCheckedOut: false,
      rating: 0
    }
  }

  cancel(): void {
    this.rForm.reset();
    this._dialogRef.close();
  }

  save(): void{
    this._dialogRef.close(this.book);
  }
  
  onRatingClicked(book:IBook):void {
    this.rForm.controls['rating'].setValue(this.book.rating);
  }

  addPost(post) {
    this.book.title = post.title;
    this.book.author = post.author;
    this.book.rating = post.rating;
    this.book.isCheckedOut = post.isCheckedOut;
  }

}
