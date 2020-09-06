import { Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{ 
  constructor(public translateService: TranslateService){
  }

  ngOnInit(): void {
    this.translateService.addLangs(['en', 'zh']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|zh/)? browserLang: 'en');
  }

}
