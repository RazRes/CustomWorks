import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from "./users/users.component";
import {AddUserComponent} from "./users/add-user/add-user.component";
import {EditUserComponent} from "./users/edit-user/edit-user.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {BooleanPipe} from "../boolean.pipe";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {RouterModule, Routes} from "@angular/router";
import {EventsManagementComponent} from "./events-management/events-management.component";
import {VideoManagementComponent} from './video-management/video-management.component';
import {AdminComponent} from "./admin.component";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzCardModule} from "ng-zorro-antd/card";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'events-management', component: EventsManagementComponent},
      {path: 'video-management', component: VideoManagementComponent}
    ]
  },
]

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    BooleanPipe,
    EventsManagementComponent,
    VideoManagementComponent
  ],
  exports: [
    UsersComponent
  ],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
        NzButtonModule,
        NzSpaceModule,
        NzPopconfirmModule,
        NzTableModule,
        NzGridModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzDatePickerModule,
        NzCheckboxModule,
        NzSpinModule,
        NzCardModule
    ]
})
export class AdminModule {
}
