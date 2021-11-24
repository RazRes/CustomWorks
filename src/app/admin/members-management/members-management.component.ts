import {Component, OnInit} from '@angular/core';
import {MembersService} from "../../members/members.service";
import {Member} from "../../members/model";

@Component({
  selector: 'app-members-management',
  templateUrl: './members-management.component.html',
  styleUrls: ['./members-management.component.css']
})
export class MembersManagementComponent implements OnInit {

  members: Member [] = []
  loading = false

  constructor(private membersService: MembersService) {
  }

  async ngOnInit() {
    this.loading = true
    this.members = await this.membersService.getMembers().finally(() => this.loading = false)
  }

}
