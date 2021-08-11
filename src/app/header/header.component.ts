import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServicesService } from './../services/services.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dataMenuP:any = [];
  dataMenuI:any = [];
  dataWidgets:any = [];
  ordenMenu: any[] = [];

  constructor(private _homeservice:ServicesService) {}

  ngOnInit(): void {
    this._homeservice.getMenuPrincipal()
    .subscribe((res:any) => {
          this.dataMenuP = res;
          console.log(this.dataMenuP);
          // this.dataMenuP.items.forEach(element => {
          //   this.ordenMenu.push({
          //     orden: element.menu_order,
          //     url: element.url
          //   });
          // });
        });
        this._homeservice.getMenuInicioSesion()
        .subscribe((res:any) => {
          this.dataMenuI = res;        
          console.log(this.dataMenuI);
    });
    this._homeservice.getWidgets()
    .subscribe((res:any) => {
          this.dataWidgets = res;        
    });
  }

  scrollConClick( url:string ){
      $('html, body').animate({
        scrollTop: $(url).offset().top
      }, .5);
  }
  
}

