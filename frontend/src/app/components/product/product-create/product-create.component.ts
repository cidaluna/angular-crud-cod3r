import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }
  
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
   
  }

  // este metodo create faz uma chamada para o service e recebe como resposta um Observable de product 
  // então, chama o metodo Subscribe que notifica quando essa resposta chegar
  // exibe a msg de produto criado e utiliza as rotas de navegação (opcional) para ir para tela de produto
  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancelProduct(): void{
    this.router.navigate(['/products']);
  }

}
