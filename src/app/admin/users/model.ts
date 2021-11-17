import {Validators} from "@angular/forms";

export interface UserInterface {
  email: string
  enabled: boolean
  firstName: string
  id: number
  lastName: string
  password: string
  roles: string []
  username: string
}
export interface AddUser {
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  enabled: boolean,
}

