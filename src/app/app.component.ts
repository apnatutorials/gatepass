import { Component } from '@angular/core';
import { Router } from '@angular/Router';
import {TranslateService} from '@ngx-translate/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private translate: TranslateService, private loginService: LoginService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('hi');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('hi');
  }

  public useLanguage(language: string) {
    this.translate.use(language);
  }
  
}