import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {CreateParentRequest} from "../../model/create-parent-request";
import {ParentService} from "../../services/parent.service";

@Component({
  selector: 'app-parent-signup',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './parent-signup.component.html',
  styleUrl: './parent-signup.component.css'
})
export class ParentSignupComponent implements OnInit{
    form: FormGroup;
    createParentRequest: CreateParentRequest;

    constructor(
        private formBuilder: FormBuilder,
        private parentService: ParentService,
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
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.createParentRequest = this.form.value;
            console.log(this.form.value.name)
            this.createParent(this.createParentRequest)

        } else {
            this.form.markAllAsTouched();
        }
    }

    createParent(request:CreateParentRequest){
        this.parentService.createParent(request).subscribe({
            next:value => {
                console.log("created parent")
                this.router.navigate(["login"])
            },error:err => {
                console.log(err)
            }
        })
    }

}
