import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
  phone: number;
  id: number;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  private users: User[] = [];

  addUser(user: User): void {
    const newId = this.users.length + 1;
    const newUser: User = { ...user, id: newId };
    this.users.push(newUser);
  }

  getUsers() {
    return this.users;
  }

  getUsersCount() {
    return this.users.length;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
