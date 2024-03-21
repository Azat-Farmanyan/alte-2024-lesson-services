import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit, inject } from '@angular/core';
import { User, UsersService } from '../../../services/users.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit {
  @Input({
    required: true,
  })
  user: User;

  usersService = inject(UsersService);

  ngOnInit(): void {}

  onDeleteUser(id: number) {
    this.usersService.deleteUser(id);
    // this.users = this.userService.getUsers(); // Update users list after deletion
  }
}
