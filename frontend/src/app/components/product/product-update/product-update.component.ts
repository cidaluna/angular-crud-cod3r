import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }
  
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  // Ao inicializar este componente ele já ira preencher o formulario com o dado do produto especificado.
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById('id').subscribe(product => {
      this.product = product
    });
  }

  updateProduct():void{
    this.productService.update(this.product).subscribe(product => {
      this.productService.showMessage('Produto Atualizado Com Sucesso!')
      this.router.navigate(['/products'])
    });
  }
 
  cancelProduct(): void{
    this.router.navigate(['/products'])
  }
}
