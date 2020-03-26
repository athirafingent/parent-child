import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'athira-app';

  form: FormGroup;
  fruitList: {};
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      fruits: this.fb.array([this.fb.control('')])
    });
  }

  get get_fruits() {
    return this.form.get('fruits') as FormArray;
  }

  addTextBox() {
    this.get_fruits.push(this.fb.control(''));
  }

  submit() {
    this.fruitList = this.form.value['fruits'];
  }

  onFavouriteFruit(data: string) {
    console.log(data);
  }

}
