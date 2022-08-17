import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css'],
})
export class FormsReactiveComponent implements OnInit {
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  public submitForm() {
    console.log(this.cadastroForm.value);
    console.log(this.cadastroForm.value.firstName);
    console.log(this.cadastroForm.value.lastName);
  }
}
