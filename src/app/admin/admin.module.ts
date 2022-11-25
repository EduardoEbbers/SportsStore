import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";

let routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: AdminComponent },
    { path: '**', redirectTo: 'auth' }
]);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        AuthComponent
    ]
})
export class AdminModule {
    
}