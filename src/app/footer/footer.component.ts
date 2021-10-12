import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServicesService } from './../services/services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dataColumn1:any = [];
  dataColumn2:any = [];
  dataWidgets:any = [];

  constructor(private _homeservice:ServicesService) { }

  ngOnInit(): void {
    this._homeservice.getMenuFooterColumn1()
    .subscribe((res:any) => {
          this.dataColumn1 = res; 
    });
    this._homeservice.getMenuFooterColumn2()
    .subscribe((res:any) => {
          this.dataColumn2 = res;        
    });
    this._homeservice.getWidgets()
    .subscribe((res:any) => {
          this.dataWidgets = res;
    });
  }
}
