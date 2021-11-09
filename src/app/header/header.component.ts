import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd/modal";
import {ContactUsComponent} from "../contact-us/contact-us.component";
import {ContactUsServiceService} from "../contact-us/contact-us-service.service";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NzModalService]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private modal: NzModalService, private contactService: ContactUsServiceService) {
  }

  ngOnInit(): void {
  }

  async goToHomePage() {
    await this.router.navigateByUrl('/home')
  }

  async goToMembersPage() {
    await this.router.navigateByUrl('/members')
  }

  async goToAboutPage() {
    await this.router.navigateByUrl('/about')
  }

  async goToEventsPage(){
    await this.router.navigateByUrl('/events')
  }

  async goToAdminPage(){
    await this.router.navigateByUrl('/admin')
  }

  openContactModal() {
    this.modal.create({
      nzTitle: 'Contact us',
      nzContent: ContactUsComponent,
      nzFooter: null
    })
  }

  openLoginModal() {
    this.modal.create({
      nzContent: LoginComponent,
      nzFooter: null,
      nzWidth: 400
    })
  }

  openRegisterModal(){
    this.modal.create({
      nzTitle: 'Register',
      nzContent: RegisterComponent,
      nzFooter: null
    })
  }
}
