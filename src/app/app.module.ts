import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddressBookService} from './index';
import { BookListComponent } from './component/book-list.component';
import { SortIconComponent } from './component/sort-icon.component';
import { UpdateConfirmationModalComponent } from './component/update-confirmation-modal/update-confirmation-modal.component';
import { AlertDialogModalComponent } from './component/alert-dialog-modal/alert-dialog-modal.component';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SortIconComponent,
    UpdateConfirmationModalComponent,
    AlertDialogModalComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]

      }
    })
  ],
  entryComponents: [UpdateConfirmationModalComponent],
  providers: [AddressBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
