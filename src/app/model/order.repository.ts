import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private datasource: RestDataSource) {
    
    }

    getOrders(): Order[] {
        if(!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        this.loaded = false;
        return this.datasource.saveOrder(order);
    }

    updateOrder(order: Order) {
        let index = this.orders.findIndex(o => o.id == order.id);
        this.datasource.updateOrder(order)
            .subscribe(o => {
                this.orders.splice(index, 1, order);
            });
    }

    deleteOrder(id: number) {
        let index = this.orders.findIndex(o => o.id == id);
        this.datasource.deleteOrder(id)
            .subscribe(o => {
                this.orders.splice(index, 1);
            });
    }

    loadOrders() {
        this.loaded = true;
        this.datasource.getOrders()
            .subscribe(o => this.orders = o);
    }
}