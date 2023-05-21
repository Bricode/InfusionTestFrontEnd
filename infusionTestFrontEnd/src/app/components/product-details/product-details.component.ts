import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/product/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent {
  selectedId: number = Number(this.route.snapshot.paramMap.get('id'));
  product: Product = {} as Product;
  displayForm : boolean = false;
  editProductForm = this.formBuilder.group({name:'',description: '',price: 0,sku:0,id:0});

  constructor(private productService: ProductsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {    
    
    this.productService.getSingleProduct(this.selectedId).subscribe((data: Product) => {
      this.product = data;
      this.displayForm = true;
      this.editProductForm.setValue(data);
      console.log(data);
      
    });
  }

  onSubmit(): void {     
    this.product.description= this.editProductForm.value.description as string
    this.product.name = this.editProductForm.value.name as string
    this.product.sku = this.editProductForm.value.sku as number
    this.product.price = this.editProductForm.value.price as number

    console.log(this.product);
    this.productService.saveProduct(this.product);
    console.log("test");
    this.router.navigateByUrl('/products');
  }
}
