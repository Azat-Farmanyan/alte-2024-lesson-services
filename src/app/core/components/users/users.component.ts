import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule,
    UserCardComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {}

  usersService = inject(UsersService);
}
