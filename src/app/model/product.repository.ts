import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private datasource: StaticDataSource) {
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

    getCategories(): string[] {
        return this.categories;
    }
}