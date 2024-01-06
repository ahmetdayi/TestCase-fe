import {Inject, Injectable, InjectionToken} from '@angular/core';
import {ToastrModule, ToastrService} from "ngx-toastr";
import {AuthService} from "./auth.service";
import {LoginRequest} from "../model/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(

    private authService: AuthService
  ) { }

  public login(loginRequest:LoginRequest, redirectToHome){
    this.authService.loginInForm(loginRequest).subscribe({
      next: value => {
        localStorage.clear();
        localStorage.setItem("jwtToken", value["jwtToken"])
        localStorage.setItem("userId", value["userId"])
        localStorage.setItem("role", value["role".toString()])
        setTimeout(redirectToHome, 1700)
      }, error: err => {
        console.log(err)
      }
    })
  }
}
