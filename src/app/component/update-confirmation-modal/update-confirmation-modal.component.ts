import { Component, OnInit, Input } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { Book } from '../../service/book';

@Component({
  selector: 'app-update-confirmation-modal',
  templateUrl: './update-confirmation-modal.component.html',
  styleUrls: ['./update-confirmation-modal.component.css']
})
export class UpdateConfirmationModalComponent implements OnInit {
  @Input() books: Book[];
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  update() {
    alert('not implemented yet, click Cancel to exit');
  }

}
