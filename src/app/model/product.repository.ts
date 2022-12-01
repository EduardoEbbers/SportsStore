import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private datasource: RestDataSource) {
        this.datasource.getProducts()
            .subscribe(data => {
                this.products = data;
                this.categories = data
                    .map(p => p.category ?? '(None)')
                    .filter((c, index, arr) => arr.indexOf(c) == index)
                    .sort();
            });
    }

    getProducts(category?: string): Product[] {
        return this.products
            .filter(p => category == undefined || p.category == category);
    }

    getProduct(id: number): Product | undefined {
        return this.products
            .find(p => p.id == id);
    }

    saveProduct(product: Product) {
        if(product.id == 0 || product.id == null) {
            this.datasource.saveProduct(product)
                .subscribe(p => this.products.push(p));
        } else {
            let index = this.products.findIndex(p => p.id == product.id);
            this.datasource.updateProduct(product)
                .subscribe(p => {
                    this.products.splice(index, 1, product);
                });
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => p.id == id);
            this.datasource.deleteProduct(id)
                .subscribe(p => {
                    this.products.splice(index, 1);
                });
    }

    getCategories(): string[] {
        return this.categories;
    }
}