import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MembersComponent} from "./members/members.component";
import {AboutComponent} from "./about/about.component";
import {EventsComponent} from "./events/events.component";
import {AdminModule} from "./admin/admin.module";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'members', component: MembersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'events', component: EventsComponent},
  {path: 'admin', loadChildren: () => AdminModule},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
