import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [
        StaticDataSource,
        ProductRepository,
        Cart,
        Order,
        OrderRepository
    ]
})
export class ModelModule {

}