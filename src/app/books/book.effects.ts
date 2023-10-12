import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BookService} from "./book.service";
import * as bookActions from "./book.actions";
import {mergeMap, map, catchError, of} from "rxjs";


@Injectable()
export class BookEffects {

  // Il s'agit d'un effet NgRx qui répond aux actions « AddBook ».
  addBook$ = createEffect(() => this.actions$.pipe(
    // Écoutez les actions de type « AddBook »
    ofType(bookActions.AddBook),

    // Pour chaque action 'AddBook', appelez 'addBook' sur le service de livre.
    // 'mergeMap' permet plusieurs appels 'addBook' simultanés.
    mergeMap((action) => this.bookService.addBook(action)
      .pipe(
        // Si l'appel « addBook » réussit, envoyez l'action « AddBookSuccess » avec les données du livre.
        map(book => bookActions.AddBookSuccess(book)),

        // Si l'appel « addBook » échoue, exécutez l'action « AddBookFailure » avec l'erreur.
        catchError((error) => of(bookActions.AddBookFailure({ error })))
      )
    )
  ));
  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) { }


}
