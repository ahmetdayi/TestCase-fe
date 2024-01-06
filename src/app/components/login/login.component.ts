import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";
import {Endpoints} from "../../utility/endpoints";
import {LoginRequest} from "../../model/loginRequest";
import {LoginService} from "../../services/login.service";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginRequest: LoginRequest;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loginRequest = this.form.value;
      console.log(this.form.value.username)

      this.login();
    } else {
      this.form.markAllAsTouched();
    }
  }

  private login() {
    this.loginService.login(this.loginRequest, this.redirectToHome)
  }

  redirectToParentSignUp(): void {
    this.router.navigate(["parentSignup"])
  }
  redirectToChildSignUp(): void {
    this.router.navigate(["childSignup"])
  }

  redirectToHome = () => {
    window.location.href = Endpoints.BASE_URL; // Endpoints.HOME yerine direkt URL'yi belirtin
  };
}
