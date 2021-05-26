import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServicesService } from './../services/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dataMenuP:any = [];
  dataMenuI:any = [];
  dataWidgets:any = [];

  constructor(private _homeservice:ServicesService) { }

  ngOnInit(): void {
    this._homeservice.getMenuPrincipal()
    .subscribe((res:any) => {
          this.dataMenuP = res;        
    });
    this._homeservice.getMenuInicioSesion()
    .subscribe((res:any) => {
          this.dataMenuI = res;        
    });
    this._homeservice.getWidgets()
    .subscribe((res:any) => {
          this.dataWidgets = res;        
    });
  }
}

