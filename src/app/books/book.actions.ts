import {createAction, props} from "@ngrx/store";
import {Book} from "../models/book";

export const AddBook = createAction(
  '[Book] Add book', props<Book>()
);
export const AddBookSuccess = createAction(
  '[Book] Add book successfully', props<Book>()
);
export const AddBookFailure = createAction(
  '[Book] Add book failure', props<{error: any}>()
)
export const RemoveBook = createAction(
  '[Book] Remove book', props<{bookId: string}>()
);
