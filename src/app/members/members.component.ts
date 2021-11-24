import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {MemberDetailComponent} from "./member-detail/member-detail.component";
import {MembersService} from "./members.service";
import {Member} from "./model";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [NzModalService]
})
export class MembersComponent implements OnInit {

  members: Member [] = [
    {
      email: '',
      enterDate: '',
      exitDate: '',
      id: 0,
      idSocialMedia: 0,
      lastName: '',
      memberCarId: 0,
      memberName: '',
      taxEndDate: '',
      taxPaid: false,
      taxStartDate: ''
    },
    {
      email: '',
      enterDate: '',
      exitDate: '',
      id: 0,
      idSocialMedia: 0,
      lastName: '',
      memberCarId: 0,
      memberName: '',
      taxEndDate: '',
      taxPaid: false,
      taxStartDate: ''
    },
    {
      email: '',
      enterDate: '',
      exitDate: '',
      id: 0,
      idSocialMedia: 0,
      lastName: '',
      memberCarId: 0,
      memberName: '',
      taxEndDate: '',
      taxPaid: false,
      taxStartDate: ''
    }
  ]

  loading = false

  constructor(private modal: NzModalService, private service: MembersService) {
  }

  async ngOnInit() {
    this.loading = true
    this.members = await this.service.getMembers().finally(() => this.loading = false)
    // await this.login()
  }

  getMemberDetail() {
    this.modal.create({
      nzTitle: 'Razvan Resmerita',
      nzContent: MemberDetailComponent,
      nzWidth: 700
    })
  }

  async login() {
    await this.service.login({username: 'andrei@gmail.com', password: 'parola'})
  }


}
