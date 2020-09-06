import { Component, OnInit } from '@angular/core';
import { AddressBookService } from '../service/address-book.service';
import { Book } from '../service/book';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UpdateConfirmationModalComponent } from './update-confirmation-modal/update-confirmation-modal.component';
import { AlertDialogModalComponent } from './alert-dialog-modal/alert-dialog-modal.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  checkAll: boolean;
  books: Book[];
  clonedBooks: Book[];
  bsModalRef: BsModalRef;
  constructor(private bookService: AddressBookService, private modalService: BsModalService) { }
  sortField: string;
  sortReverse: boolean;
  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
    this.clonedBooks = JSON.parse(JSON.stringify(this.books));
  }

  toggleCheckAll() {
    this.checkAll = !this.checkAll;
    if (this.checkAll) {
      this.clonedBooks.forEach(book => {
        book.checked = true;
      })
    } else {
      this.clonedBooks.forEach(book => {
        book.checked = false;
      })
    }
  }

  changeCellPhone(book: Book) {
    book.changed = true;
  }

  deleteCheckedItems() {
    let len = this.clonedBooks.length - 1;
    let found: boolean = false;
    for (let i = len; i >= 0; i--) {
      if (this.clonedBooks[i].checked) {
        found = true;
        this.clonedBooks.splice(i, 1);
      }
    }
    if (!found) {
      const initialState = {
        message: 'no selected items for delete!'
      }
      this.bsModalRef = this.modalService.show(AlertDialogModalComponent, { initialState, backdrop: 'static'});
    }

  }

  doubleClickOnCellPhone(book: Book) {
    book.editable = true;
  }

  blurOnCellPhone(book: Book) {
    book.editable = false;
  }

  sortByField(field: string) {
    if (this.sortField == field) {
      this.sortReverse = !this.sortReverse;
    } else {
      this.sortField = field;
      this.sortReverse = false;
    }
    this._doSort();
  }

  _doSort() {
    this.clonedBooks.sort((a: Book, b: Book) => {
      let compare = 0;
      let valA = a[this.sortField];
      let valB = b[this.sortField];
      compare = String(valA == null ? "" : valA).localeCompare(valB == null ? "" : valB);
      if (compare != 0) {
        return this.sortReverse ? -compare : compare;
      }
    })
  }

  getSortOrder(field: string): string {
    return this.sortField != field ? "" : this.sortReverse ? "down" : "up"
  }

  updateChangedItems() {
    let changedBooks: Book[] = [];
    this.clonedBooks.forEach((book: Book) => {
      //updated one
      if (book.changed) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].id === book.id && this.books[i].cell_phone !== book.cell_phone) {
            changedBooks.push(book);
            break;
          }
        }
      }
      // new added
      if(book.isNew && book.name && book.location && book.office && book.office_phone && book.cell_phone){
        changedBooks.push(book);
      }
    });

    if (changedBooks.length <= 0) {
      const initialState = {
        message: 'There is no change to update!'
      }
      this.bsModalRef = this.modalService.show(AlertDialogModalComponent, { initialState, backdrop: 'static'});
    } else {
      const initialState = {
        books: changedBooks
      }

      this.bsModalRef = this.modalService.show(UpdateConfirmationModalComponent, { initialState, backdrop: 'static',class:'modal-lg' })
    }
  }

  adddNew(){
    let newBook = {isNew: true, id: null, name: null, location: null, office: null, office_phone: null,
                  cell_phone: null, checked: false, editable: false, changed: false};
    this.clonedBooks.push(newBook);
  }


}
