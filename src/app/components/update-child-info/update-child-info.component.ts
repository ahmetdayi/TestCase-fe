import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginRequest} from "../../model/loginRequest";
import {LoginService} from "../../services/login.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UpdateChildRequest} from "../../model/update-child-request";
import {ChildService} from "../../services/child.service";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-update-child-info',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './update-child-info.component.html',
  styleUrl: './update-child-info.component.css'
})
export class UpdateChildInfoComponent implements OnInit{
    childId:string
    form: FormGroup;
    updateChildRequest: UpdateChildRequest;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private childService:ChildService,
        public router: Router,
    ) {
        this.activatedRoute.params.subscribe(params => {
            console.log(params["id"])
            this.childId = params["id"];

        })
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: [''],
            surname: ['']
        });

    }
    updateChildInfo(updateChildRequest:UpdateChildRequest){
        this.childService.updateChildInfo(updateChildRequest).subscribe({
            next:value => {
                console.log("updated")
            },error:err => {
                console.log(err)}
        })
    }

    onSubmit() {
        console.log(this.form)
        if (this.form.valid) {
            this.updateChildRequest = this.form.value;
            this.updateChildRequest.id = this.childId
            this.updateChildInfo(this.updateChildRequest)
            this.router.navigate(["/childInfo"])
            console.log(this.form.value.name)
        } else {
            this.form.markAllAsTouched();
        }
    }

}
