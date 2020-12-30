import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUrl = `https://5ceea7651c2baf00142cc26b.mockapi.io/api/Products`;
  constructor(
    private _http: HttpClient
  ) { }

  getList() {
    return this._http.get(this.apiUrl);
  }
}
