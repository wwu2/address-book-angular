import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {books} from './mock-book';
import {Book} from './book';


@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor() { }

  getAllBooks() : Book[]{
    return books;
  }
}
