import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AuthService {
    constructor(private datasource: RestDataSource) {

    }
    get authenticated(): boolean {
        return this.datasource.auth_token != null;
    }

    authenticate(username: string, password: string) {
        return this.datasource.authenticate(username, password);
    }
    
    clear() {
        this.datasource.auth_token = undefined;
    }
}