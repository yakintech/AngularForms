import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-kisikayit',
  templateUrl: './kisikayit.component.html',
  styleUrls: ['./kisikayit.component.css']
})
export class KisikayitComponent implements OnInit {

  kisiler = [];
  countries = ['Türkiye','Yunanistan','Laos','Vietnam','Hindistan'];

  kisiForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),

  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.kisiler.push(this.kisiForm.value);
    
    this.kisiForm.reset();

  }

}
