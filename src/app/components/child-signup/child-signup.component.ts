import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CreateParentRequest} from "../../model/create-parent-request";
import {ParentService} from "../../services/parent.service";
import {Router} from "@angular/router";
import {CreateChildRequest} from "../../model/create-child-request";
import {ChildService} from "../../services/child.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-child-signup',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './child-signup.component.html',
  styleUrl: './child-signup.component.css'
})
export class ChildSignupComponent implements OnInit{
  form: FormGroup;
  createChildRequest: CreateChildRequest;

  constructor(
      private formBuilder: FormBuilder,
      private childService: ChildService,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      inviteCode: [' '],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.createChildRequest = this.form.value;
      console.log(this.form.value.name)
      this.createParent(this.createChildRequest)

    } else {
      this.form.markAllAsTouched();
    }
  }

  createParent(request:CreateChildRequest){
    this.childService.createChild(request).subscribe({
      next:value => {
        console.log("created child")
        this.router.navigate(["login"])
      },error:err => {
        console.log(err)
      }
    })
  }

}
