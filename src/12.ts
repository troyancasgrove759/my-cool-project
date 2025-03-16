import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-my-cool-project',
  templateUrl: './my-cool-project.component.html',
  styleUrls: ['./my-cool-project.component.css']
})
export class MyCoolProjectComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      // submit code here
      console.log(this.userForm.value);
    }
  }
}