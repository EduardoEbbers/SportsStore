import { Route } from "@angular/compiler/src/core";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    selector: '',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    username?: string;
    password?: string;
    errorMessage?: string;

    constructor(private router: Router, private auth: AuthService) {

    }

    authenticate(form: NgForm) {
        if(form.valid) {
            //perform authetication
            this.auth.authenticate(this.username, this.password)
                .subscribe(response => {
                    if(response) {
                        this.router.navigateByUrl('/admin/main');
                    }
                    this.errorMessage = 'Authentication Failed';
                });
        } else {
            this.errorMessage = 'Form Data Invalid';
        }
    }
}