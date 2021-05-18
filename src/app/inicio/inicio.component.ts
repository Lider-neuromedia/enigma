import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import {MatIconRegistry} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

declare var $ : any; 



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public user: any;

  constructor(private _sanitizer: DomSanitizer, private http: HttpClient) { 
    this.user = {
      nombres: '',
      apellidos: '',
      telefono: '',
      ciudad: '',
      email: '',
      mensaje: '',
      acepto: ''
    };
  }
  
  urlSinProcesar = "//www.youtube.com/embed/5xX5-MXipGw?rel=0";
  //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero
  
  urlSaneada = this._sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar);

  ngOnInit(): void {
  }

  enviarForm(form) {
    $.ajax({
      url: '',
      type: 'POST',
      data: JSON.stringify(this.user),
      dataType:"json",
      success: function(data) {
       
      }, error: function(error){
        if(error.status === 200){
          /*Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          });*/ 
          //console.log(error);
        form.reset();
        } else {
          /*Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')*/
        }
      }
    });
   }

}
