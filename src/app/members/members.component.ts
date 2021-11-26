import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {MemberDetailComponent} from "./member-detail/member-detail.component";
import {MembersService} from "./members.service";
import {Member, members} from "./model";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [NzModalService]
})
export class MembersComponent implements OnInit {

  members: Member [] = members

  loading = false

  constructor(private modal: NzModalService, private service: MembersService) {
  }

  async ngOnInit() {
    this.loading = true
    this.members = await this.service.getMembers().finally(() => this.loading = false)
  }

  getMemberDetail() {
    this.modal.create({
      nzTitle: 'Razvan Resmerita',
      nzContent: MemberDetailComponent,
      nzWidth: 700
    })
  }



}
