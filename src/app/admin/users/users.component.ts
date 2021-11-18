import {Component, OnInit} from '@angular/core';
import {UserInterface} from './model';
import {NzModalService} from "ng-zorro-antd/modal";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {UsersService} from "./users.service";
import {async} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  listOfData!: UserInterface []
  loading = false

  constructor(private modal: NzModalService, private userService: UsersService) {
  }

  async ngOnInit() {
    this.loading = true
    this.listOfData = await this.userService.getUsers()
    this.loading = false
    console.log(this.listOfData)
  }

  addUser() {
    this.modal.create({
      nzTitle: 'Add user',
      nzContent: AddUserComponent,
      nzOnOk: async (component) => {
        component.save(component.validateForm)
        await this.userService.getUsers()
      },
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

  async deleteUser(id: number) {
    // this.listOfData.splice(index, 1)
    // this.listOfData = [...this.listOfData]
    await this.userService.delete(id)
  }
}
