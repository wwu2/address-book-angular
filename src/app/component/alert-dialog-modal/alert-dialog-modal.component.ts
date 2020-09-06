import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-dialog-modal',
  templateUrl: './alert-dialog-modal.component.html',
  styleUrls: ['./alert-dialog-modal.component.sass']
})
export class AlertDialogModalComponent implements OnInit {
  @Input() message;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
