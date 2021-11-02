import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {MemberDetailComponent} from "./member-detail/member-detail.component";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [NzModalService]
})
export class MembersComponent implements OnInit {

  constructor(private modal: NzModalService) {
  }

  ngOnInit(): void {
  }

  getMemberDetail() {
    this.modal.create({
      nzTitle: 'Razvan Resmerita',
      nzContent: MemberDetailComponent,
      nzWidth: 700
    })
  }

}
