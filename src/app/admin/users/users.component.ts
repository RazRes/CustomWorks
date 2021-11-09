import {Component, OnInit} from '@angular/core';
import {UserInterface} from './model';
import {NzModalService} from "ng-zorro-antd/modal";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  listOfData: UserInterface [] = [
    {
      car: 'Vw GTD MK6',
      name: 'RazRes',
      city: 'Bucharest',
      memberFrom: '2020-06-10',
      taxPaid: true
    },
    {
      car: 'Vw GTD MK6',
      name: 'RazRes',
      city: 'Bucharest',
      memberFrom: '2020-06-10',
      taxPaid: true
    },
    {
      car: 'Vw GTD MK6',
      name: 'RazRes',
      city: 'Bucharest',
      memberFrom: '2020-06-10',
      taxPaid: true
    },
    {
      car: 'Vw GTD MK6',
      name: 'RazRes',
      city: 'Bucharest',
      memberFrom: '2020-06-10',
      taxPaid: false
    }
  ]

  constructor(private modal: NzModalService) {
  }

  ngOnInit(): void {
  }

  addUser() {
    this.modal.create({
      nzTitle: 'Add user',
      nzContent: AddUserComponent
    })
  }

  editUser(user: UserInterface) {
    this.modal.create({
      nzTitle: 'Edit user',
      nzContent: EditUserComponent,
      nzComponentParams: {
        user
      }
    })
  }

  deleteUser(index: number){
    this.listOfData.splice(index,1)
    this.listOfData = [...this.listOfData]
  }
}
