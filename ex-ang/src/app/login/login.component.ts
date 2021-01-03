import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
        username: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ])
    });
  }

  submit(data: any) {
    if(data.username === 'admin' && data.password === '123') {
      this._loginService.setLogin(true);
      this._router.navigate(['/listProducts']);
    }
  }
}
