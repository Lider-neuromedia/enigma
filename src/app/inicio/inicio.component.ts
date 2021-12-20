import { Component, Directive, HostListener, Input, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import { SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ServicesService } from './../services/services.service';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;
declare var moverScroll: any;

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }

  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html': return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitized.bypassSecurityTrustScript(value);
      case 'url': return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  public user: any;

  data: any = [];
  products: any = [];
  data_typed: any = [];
  public activePillIndex: number = 0;

  dataMenuP: any = [];
  loader = true;
  valorScroll: number = 0;
  scrollCliente: any;
  intervalo: NodeJS.Timeout;
  intervalo2: NodeJS.Timeout;
  formulario: FormGroup;

  constructor(private _sanitizer: DomSanitizer, private _homeservice: ServicesService, private common: CommonService, private fb: FormBuilder) {
    this.user = {
      nombres: '',
      apellidos: '',
      telefono: '',
      ciudad: '',
      correo: '',
      mensaje: '',
      acepto: ''
    };
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      correo: ['', Validators.required],
      mensaje: ['', Validators.required],
      acepto: ['', Validators.required]
    })
  }

  urlSinProcesar = "//www.youtube.com/embed/5xX5-MXipGw?rel=0";
  //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero

  urlSaneada = this._sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar);

  ngOnInit(): void {    
    this._homeservice.getHome()
      .subscribe((res: any) => {
        let seo = res.seo;
        this.common.paginaInicioMetaData(seo.titulo, seo.descripcion, seo.palabras_claves, seo.url, seo.imagen);
        this.loader = false;
        this.data = this._sanitizer.bypassSecurityTrustHtml(res);
        this.data = this.data.changingThisBreaksApplicationSecurity;
        this.data_typed = this.data.banner.typed;
      });
  }


  enviarForm() {
    if(this.formulario.invalid && !this.formulario.get('acepto').value){
      return Object.values( this.formulario.controls ).forEach(control => {
        control.markAsTouched();
      })
    }
    if(this.formulario.invalid){
      return Object.values( this.formulario.controls ).forEach(control => {
        control.markAsTouched();
      })
    }
    if(!this.formulario.get('acepto').value){
      alert('Debes aceptar Terminos y condiciones');
      return;
    }
    $.ajax({
      url: `${environment.domain}/wp-content/themes/enigma/contacto/form-contacto.php`,
      type: 'POST',
      data: JSON.stringify(this.user),
      dataType: "json",
      success: function (data) {

      }, error: function (error) {
        if (error.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          });
        } else {
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
        }
      }
    });
    this.formulario.reset();
  }

  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  public selectPill(index: number) {
    this.activePillIndex = index;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: true,
    dots: false,
    margin: 4,
    center: true,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: false
  }

}
