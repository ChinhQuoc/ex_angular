import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  GetListEmployee(): any[] {
    const employees: any[] =
      [
        { id: 1, name: `Nguyen Van A` },
        { id: 2, name: `Nguyen Van B` },
        { id: 3, name: `Nguyen Van C` }
      ];

    return employees;
  }
}
