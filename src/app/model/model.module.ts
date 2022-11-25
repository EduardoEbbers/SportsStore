import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [
        StaticDataSource,
        ProductRepository,
        Cart
    ]
})
export class ModelModule {

}