import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.inteface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  private employees: Employee[]=[
    {name: 'emp1', salary: '100000', address: '38 station place', isPermanentAddress: 'no', alternateAddress: '5 empire st' },
    {name: 'emp2', salary: '60000', address: '10 hollywood blvd la', isPermanentAddress: 'yes', alternateAddress: '' }

  ];


  getEmployees(){
    return this.employees;
  }

  createEmployee(employee: Employee){
  this.employees.push(employee);
  }

  deleteEmployee(index){
  this.employees.splice(index,1)
  }
}
