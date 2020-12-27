import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: any[];
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employees = this.employeeService.GetListEmployee();
  }

}
