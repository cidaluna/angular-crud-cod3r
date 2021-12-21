import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

const baseUrl = "http://localhost:3001/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // classe service é responsavel pela comunicacao http com o Backend
  // nesse projeto o Backend é o arquivo db.json e precisa ser rodado separado com npm start

  

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }


  showMessage(msg: string): void{
    this.snackBar.open(msg, ' X ', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(baseUrl,product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl);
  }

  readById(id: string): Observable<Product>{
    const url = `${baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }


  update(product: Product): Observable<any>{
    const url = `${baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }


  //update(product: Product): Observable<Product>{
  //  const url = `${this.baseUrl}/${product.id}`;
  //  return this.http.put<Product>(url, product);
  //}
  
  delete(id: string){
    const url = `${baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

}
