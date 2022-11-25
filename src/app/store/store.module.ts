import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [
        BrowserModule,
        ModelModule,
        FormsModule
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