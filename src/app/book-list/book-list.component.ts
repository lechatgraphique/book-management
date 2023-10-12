import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Book} from "../models/book";
import {AddBook, RemoveBook} from "../books/book.actions";
import {Observable} from "rxjs";
import {AppState} from "../app.state";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books$: Observable<Book[]>;
  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'));
  }

  addBook(book: Book) {
    this.store.dispatch(AddBook(book));
  }
  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({bookId}));
  }
}
