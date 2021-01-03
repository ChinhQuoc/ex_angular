import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  _isLogin = false;

  isLogin(): boolean {
    return this._isLogin;
  }

   setLogin(isLogin: boolean) {
    this._isLogin = isLogin;
  }
}
