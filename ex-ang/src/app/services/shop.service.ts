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

  getProductDetail(id: string) {
    return this._http.get(this.apiUrl+`/${id}`);
  }

  deleteProduct(id: string) {
    return this._http.delete(this.apiUrl+`/${id}`);
  }

  editProduct(id: string, data: any) {
    return this._http.put(this.apiUrl+`/${id}`, data);
  }
}
