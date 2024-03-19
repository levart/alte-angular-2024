import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";

export const AgeValidator = (control: AbstractControl<any>): any => {
  const birthDate = new Date(control.value);
  const age = new Date().getFullYear() - birthDate.getFullYear();
  return age >= 18 ? null : {age: true};
}


// export const passwordMatchValidator = () => {
//   return (group: any) => {
//     console.log(group);
//     const password = group.get('password').value;
//     const confirmPassword = group.get('confirmPassword').value;
//     const isValid = password === confirmPassword;
//     group.get('confirmPassword').setErrors(isValid ? null : {passwordMatch: true});
//     return isValid ? null : {passwordMatch: true};
//   }
// }

// angular 17 formgroup password match validator

export const passwordMatchValidator = (): any => {
  return (group: FormGroup) => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    const isValid = password === confirmPassword;
    group.get('confirmPassword')?.setErrors(isValid ? null : {notMatch: true});
    return isValid ? null : {passwordMatch: true};
  }
}


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    JsonPipe
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {


  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required, AgeValidator]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)
    ]),
    confirmPassword: new FormControl('', Validators.required),
  }, {validators: passwordMatchValidator()})

  onsubmit() {
    this.registerForm.markAllAsTouched();
  }
}
