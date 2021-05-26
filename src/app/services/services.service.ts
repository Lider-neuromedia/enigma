import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public url: string;
  public urlMenu: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
    this.urlMenu = GLOBAL.urlMenu;
  }

  getHome(): Observable<any>{
    return this._http.get(`${this.url}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}

  getMenuPrincipal(): Observable<any>{
    return this._http.get(`${this.urlMenu}/2`);
  }
  getMenuInicioSesion(): Observable<any>{
    return this._http.get(`${this.urlMenu}/3`);
  }
  getMenuFooterColumn1(): Observable<any>{
    return this._http.get(`${this.urlMenu}/4`);
  }
  getMenuFooterColumn2(): Observable<any>{
    return this._http.get(`${this.urlMenu}/5`);
  }
  getWidgets(): Observable<any>{
    return this._http.get(`${this.url}/widgets`);
  }
}

