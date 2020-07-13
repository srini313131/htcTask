import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  employeeForm: FormGroup;
  isPermanentAddressRadio= true;
  constructor(private fb: FormBuilder, private employeesService: EmployeesService) { }

  ngOnInit(): void {
   this.employeeForm= this.fb.group({
      name: ['', [Validators.maxLength(20), Validators.required] ],
      salary: ['', Validators.required],
      address: ['', Validators.required],
      isPermanentAddress:['yes'],
      alternateAddress: ['']

    })
  }
  submit(){
   console.log("submit->>>>", this.employeeForm.value);
    this.employeesService.createEmployee(this.employeeForm.value);
    alert("Employee Created Succesfully")
    this.employeeForm.reset();
  }

  radioChange(){
    console.log("is permanent address changed", this.employeeForm.get('isPermanentAddress').value);
    const alternateAddressControl=this.employeeForm.get('alternateAddress');
    alternateAddressControl.setValue('');
    alternateAddressControl.setErrors({required: true})


  }

  numbersOnly(event) {   
    console.log("numbers only", event)     
    const input = String.fromCharCode(event.keyCode);        
    if (!/^[0-9]*$/.test(input)) {            
      event.preventDefault();        
    }   
   }
}
