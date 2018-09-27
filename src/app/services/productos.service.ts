import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-9a4bf.firebaseio.com/productos_idx')
    .subscribe( (resp: any[]) => {
      console.log(resp);
      
    });
  }

}
