import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [
        BrowserModule,
        ModelModule
    ],
    declarations: [
        StoreComponent
    ],
    exports: [
        StoreComponent
    ]
})
export class StoreModule {

}