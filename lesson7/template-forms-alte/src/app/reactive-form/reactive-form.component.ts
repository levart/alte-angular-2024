import {Component, OnInit, signal} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    NgFor
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{
  form = new FormGroup({
    firstName: new FormControl('levan'),
    lastName: new FormControl(''),
    role: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl('')
    }),
    skills: new FormArray([
      new FormGroup({
        skill: new FormControl('')
      })
    ])
  })

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  ngOnInit() {
    // this.form.valueChanges.subscribe( (form) =>{
    //   console.log(form)
    // })

    // this.form.statusChanges.subscribe( (status) => {
    //   console.log('status',status)
    // })

    this.form.get('lastName')?.valueChanges.subscribe( (value) => {
      console.log(value)
    })

    this.form.get('skills')?.valueChanges.subscribe( (value) => {
      console.log(value)
    })
  }

  addSkill() {
    const newControl = new FormGroup({
      skill: new FormControl('')
    })
    this.skills.push(newControl)
  }

  removeSkill(i: number) {
    console.log(i)
    this.skills.removeAt(i)
  }

  submit() {
    console.log(this.form)

    // console.log(this.form.get('skills')?.value)
  }
}
