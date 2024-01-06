import { Component } from '@angular/core';
import {Endpoints} from "../../utility/endpoints";
import {AuthService} from "../../services/auth.service";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {routes} from "../../app.routes";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authService: AuthService) {
  }
  redirectLogin(){
    window.location.href = Endpoints.BASE_URL + "/login"
  }

  logout() {
    this.authService.logout();
  }

}
