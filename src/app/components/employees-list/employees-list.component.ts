import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.inteface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
   this.employees= this.employeesService.getEmployees();
  }
  deleteEmployee(index){
   if(confirm("Are you Sure you want to delete?"))
    this.employeesService.deleteEmployee(index)
  }
}
