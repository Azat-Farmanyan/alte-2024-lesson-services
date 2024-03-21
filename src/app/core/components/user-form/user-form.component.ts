import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { User, UsersService } from '../../services/users.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  myForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  usersService = inject(UsersService);

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('azat', Validators.required),
      email: new FormControl('aza@dad', [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(124, Validators.required),
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.usersService.addUser(this.myForm.value as User);
      this.myForm.reset();

      // this.myForm.markAsPristine();
      // this.myForm.markAsUntouched();
    }
  }
}
