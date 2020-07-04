import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm = new FormGroup({

    productname: new FormControl(''),
    description: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    })
 
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.productForm.value);
  }

}
