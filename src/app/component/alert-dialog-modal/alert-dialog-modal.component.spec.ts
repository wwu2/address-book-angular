import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogModalComponent } from './alert-dialog-modal.component';

describe('AlertDialogModalComponent', () => {
  let component: AlertDialogModalComponent;
  let fixture: ComponentFixture<AlertDialogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDialogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
