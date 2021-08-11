import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private titulo: Title, private meta: Meta) { }

  paginaInicioMetaData(): void{
    this.paginaMetaData(
      'Aplicativos para optimizar el rendimiento de tu equipo',
      'Optimiza tus procesos y gestiona tu empresa desde tu telefono con informacion en tiempo real desde la nube',
      'Soluciona problemas en tiempo real desde tu celular',
      ''
    )
  }

  paginaMetaData( titulo: string, descripcion: string, keywords: string = '', url: string = '' ): void{
    this.titulo.setTitle(titulo);

    this.meta.updateTag({
      property: 'og:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:url',
      content: url
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'keywords',
      content: keywords
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.subject',
      content: keywords
    } as MetaDefinition);
    
  }
}
