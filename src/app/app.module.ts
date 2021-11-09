import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {MembersComponent} from './members/members.component';
import {FooterComponent} from './footer/footer.component';
import {MemberDetailComponent} from './members/member-detail/member-detail.component';
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {LoginComponent} from './login/login.component';
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {EventsComponent} from './events/events.component';
import {RegisterComponent} from './register/register.component';
import {NzSpinModule} from "ng-zorro-antd/spin";
import {AdminComponent} from './admin/admin.component';
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCalendarModule} from "ng-zorro-antd/calendar";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzModalModule} from "ng-zorro-antd/modal";
import {AdminModule} from "./admin/admin.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MembersComponent,
    FooterComponent,
    MemberDetailComponent,
    AboutComponent,
    ContactUsComponent,
    LoginComponent,
    EventsComponent,
    RegisterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    NzTypographyModule,
    NzIconModule,
    NzDropDownModule,
    NzGridModule,
    NzCardModule,
    NzDescriptionsModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzImageModule,
    NzSpaceModule,
    NzUploadModule,
    NzCheckboxModule,
    NzSpinModule,
    NzToolTipModule,
    NzTableModule,
    NzDividerModule,
    NzCalendarModule,
    NzDatePickerModule,
    NzPopconfirmModule,
    NzModalModule,
    AdminModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
