import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-uyekayit',
  templateUrl: './uyekayit.component.html',
  styleUrls: ['./uyekayit.component.css']
})
export class UyekayitComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  Update(){
    this.name.setValue("Bilge Adam Akademi")
  }

}
