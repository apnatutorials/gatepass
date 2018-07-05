import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { MainComponent } from './main/main.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormForNonGovtEmployeeComponent } from './form-for-non-govt-employee/form-for-non-govt-employee.component';
import { VaahanPraveshPtraComponent } from './vaahan-pravesh-ptra/vaahan-pravesh-ptra.component';
//import { FormForAlpawadhiComponent } from './form-for-alpawadhi/form-for-alpawadhi.component';
import { VahanPraveshPatrSachivalayaEComponent } from './vahan-pravesh-patr-sachivalaya-e/vahan-pravesh-patr-sachivalaya-e.component';
import { VahanPraveshPatrSachivalayaNijigadiComponent } from './vahan-pravesh-patr-sachivalaya-nijigadi/vahan-pravesh-patr-sachivalaya-nijigadi.component';
import { VahanPraveshPatrSachivalayaPramukhSachivComponent } from './vahan-pravesh-patr-sachivalaya-pramukh-sachiv/vahan-pravesh-patr-sachivalaya-pramukh-sachiv.component';
import { VahanPraveshPatrSachivalayaVibhagadhyakshComponent } from './vahan-pravesh-patr-sachivalaya-vibhagadhyaksh/vahan-pravesh-patr-sachivalaya-vibhagadhyaksh.component';
import { VahanPraveshPatrSachivalayaVisheshSachivComponent } from './vahan-pravesh-patr-sachivalaya-vishesh-sachiv/vahan-pravesh-patr-sachivalaya-vishesh-sachiv.component';


import { LoginService } from './services/login.service';
import { MainAreaComponent } from './main-area/main-area.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PassSarkariNijiComponent } from './pass-sarkari-niji/pass-sarkari-niji.component';
import { PassSevaNivrattOfficerComponent } from './pass-seva-nivratt-officer/pass-seva-nivratt-officer.component';
import { PassGairSarkariComponent } from './pass-gair-sarkari/pass-gair-sarkari.component';
import { PassMukhyaBhawanNaveenBhawanComponent } from './pass-mukhya-bhawan-naveen-bhawan/pass-mukhya-bhawan-naveen-bhawan.component';
import { PassBapuBhawanComponent } from './pass-bapu-bhawan/pass-bapu-bhawan.component';
import { PassAlpAwadhiComponent } from './pass-alp-awadhi/pass-alp-awadhi.component';
import { PassComponent } from './pass/pass.component';
import { MyHttpRequestService } from './services/my-http-request.service';
import { SearchPassComponent } from './search-pass/search-pass.component';
import { PassService } from './services/pass.service';
import { VahanPassService } from './services/vahan-pass.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        MainBodyComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        SidebarComponent,
        FormForNonGovtEmployeeComponent,
        VaahanPraveshPtraComponent,
        PassSarkariNijiComponent,
        PassSevaNivrattOfficerComponent,
        PassGairSarkariComponent,
        PassMukhyaBhawanNaveenBhawanComponent,
        PassBapuBhawanComponent,
        PassAlpAwadhiComponent,
        VahanPraveshPatrSachivalayaEComponent,
        VahanPraveshPatrSachivalayaNijigadiComponent,
        VahanPraveshPatrSachivalayaPramukhSachivComponent,
        VahanPraveshPatrSachivalayaVibhagadhyakshComponent,
        VahanPraveshPatrSachivalayaVisheshSachivComponent,
        MainAreaComponent,
        BreadcrumbComponent,
        PassAlpAwadhiComponent,
        PassComponent,
        SearchPassComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        FormsModule,
        ReactiveFormsModule,
       // RouterModule,
        MaterializeModule,
        HttpModule
    ],
    providers: [
        LoginService,
        MyHttpRequestService,
        PassService,
        VahanPassService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
