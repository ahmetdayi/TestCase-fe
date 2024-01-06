import {Injectable} from '@angular/core';
import {Endpoints} from "../utility/endpoints";
import {Observable} from "rxjs";
import {LoginRequest} from "../model/loginRequest";
import {LoginResponse} from "../model/loginResponse";
import {ToastrService} from "ngx-toastr";
import {HttpService} from "./http.service";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpService,
        private router: Router
    ) {
    }

    public loginInForm(request: LoginRequest): Observable<LoginResponse> {
        return this.http.POST<LoginResponse>(Endpoints.LOGIN_IN_FORM, request);
    }

    isAuthenticated() {
        return !!localStorage.getItem("jwtToken");
    }

    logout() {
        localStorage.clear();
        this.router.navigate(["/login"]);
    }

    isParent() {
        const role = localStorage.getItem("role")
        return role == "PARENT";
    }

    isAdmin() {
        const role = localStorage.getItem("role")
        return role == "ADMIN";
    }
}
