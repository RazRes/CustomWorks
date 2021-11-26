import {Component, OnInit} from '@angular/core';
import {UserInterface} from './model';
import {NzModalService} from "ng-zorro-antd/modal";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {UsersService} from "./users.service";

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
  }

  addUser() {
    this.modal.create({
      nzTitle: 'Add user',
      nzContent: AddUserComponent,
      nzOnOk: async (component) => {
        component.save(component.validateForm).then(async () => {
          this.loading = true
          this.listOfData = await this.userService.getUsers()
          this.loading = false
        })
      },
    })
  }

  async editUser(user: UserInterface) {
    this.modal.create({
      nzTitle: 'Edit user',
      nzContent: EditUserComponent,
      nzComponentParams: {
        user
      },
      nzOnOk: async (component) => {
        this.loading = true
        component.save(component.validateForm).finally(async () => {
          this.loading = false
        })
        this.listOfData = await this.userService.getUsers()
      }
    })
  }

  async deleteUser(id: number) {
    this.loading = true
    await this.userService.delete(id).finally(async () => {
      this.loading = false
    })
    this.listOfData = await this.userService.getUsers()
  }
}
