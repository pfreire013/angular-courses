import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  skills = ['Javascript', 'React', 'React Native', 'Node Js', 'Angular']

  model = new Emp(101, 'John', 'Fullstack Developer', this.skills[0])

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
