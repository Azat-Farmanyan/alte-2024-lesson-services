import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  usersService = inject(UsersService);

  ngOnInit(): void {}
}
