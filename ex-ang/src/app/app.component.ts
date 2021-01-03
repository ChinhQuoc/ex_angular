import { Component, OnInit } from '@angular/core';
import { CheckLoginGuard } from 'src/app/guard/check-login.guard';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ex-ang';

  constructor(
    public _loginService: LoginService
  ) {
  }

  logOut() {
    this._loginService.setLogin(false);
  }
}
