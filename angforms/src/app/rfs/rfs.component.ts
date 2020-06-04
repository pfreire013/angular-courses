import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.scss']
})
export class RfsComponent {

EmployeeName = new FormControl('')

updateEmployeeName() {
  this.EmployeeName.setValue('JOhn')
}

employeeForm = new FormGroup({
  Name: new FormControl(''),
  Designation: new FormControl(''),
  Address: new FormGroup({
    country: new FormControl(''),
    city: new FormControl('')
  }),
});

onSubmit() {
  console.log(this.employeeForm.value)
}

}
