import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginRequest} from "../../model/loginRequest";
import {LoginService} from "../../services/login.service";
import {CreateSubscribeTypeRequest} from "../../model/create-subscribe-type-request";
import {SubscribeTypeService} from "../../services/subscribe-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-subscribe-type',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './create-subscribe-type.component.html',
  styleUrl: './create-subscribe-type.component.css'
})
export class CreateSubscribeTypeComponent implements OnInit{
    form: FormGroup;
    createSubscribeTypeRequest:CreateSubscribeTypeRequest


    constructor(
        private formBuilder: FormBuilder,
        private subscribeTypeService:SubscribeTypeService,
        private router:Router

    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', [Validators.required]],
            price: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if (this.form.valid) {
           this.createSubscribeTypeRequest=this.form.value
            console.log(this.form.value.name)
            this.createSubscribeType(this.createSubscribeTypeRequest);


        } else {
            this.form.markAllAsTouched();
        }
    }

    createSubscribeType(request:CreateSubscribeTypeRequest){
        this.subscribeTypeService.createSubscribeType(request).subscribe({
            next:value => {
                console.log("created")
            },error:err => {
                console.log(err)
            }
        })
    }

}
