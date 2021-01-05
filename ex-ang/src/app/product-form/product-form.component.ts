import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  formProduct: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      sale: new FormControl(''),
      percent: new FormControl('')
    });
  }

  submit(data: any) {

  }

}
