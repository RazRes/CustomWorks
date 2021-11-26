import {Component, OnInit} from '@angular/core';
import {MembersService} from "../../members/members.service";
import {Member} from "../../members/model";
import {NzModalService} from "ng-zorro-antd/modal";
import {AddMemberComponent} from "./add-member/add-member.component";
import {EditMemberComponent} from "./edit-member/edit-member.component";

@Component({
  selector: 'app-members-management',
  templateUrl: './members-management.component.html',
  styleUrls: ['./members-management.component.css']
})
export class MembersManagementComponent implements OnInit {

  members: Member [] = []
  loading = false

  constructor(private membersService: MembersService, private modal: NzModalService) {
  }

  async ngOnInit() {
    this.loading = true
    this.members = await this.membersService.getMembers().finally(() => this.loading = false)
  }

  addMember() {
    this.modal.create({
      nzTitle: 'Add member',
      nzContent: AddMemberComponent
    })
  }

  editMember(member: Member) {
    this.modal.create({
      nzTitle: 'Edit member',
      nzContent: EditMemberComponent,
      nzComponentParams: {
        member: member
      }
    })
  }

}
