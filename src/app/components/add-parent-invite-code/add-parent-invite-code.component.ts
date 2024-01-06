import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginRequest} from "../../model/loginRequest";
import {LoginService} from "../../services/login.service";
import {UpdateChild_ParentList_Request} from "../../model/UpdateChild_ParentList_Request";
import {ChildService} from "../../services/child.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-parent-invite-code',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './add-parent-invite-code.component.html',
  styleUrl: './add-parent-invite-code.component.css'
})
export class AddParentInviteCodeComponent implements OnInit{
    form: FormGroup;
    updateChild_ParentList_Request:UpdateChild_ParentList_Request

    constructor(
        private formBuilder: FormBuilder,
        private childService:ChildService,
        private router:Router
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            inviteCode: [""]
        });
    }

    onSubmit() {
        if (this.form.valid) {
            const userId:string = localStorage.getItem("userId")
            console.log(this.form.value)
            this.updateChild_ParentList_Request = {parentList:[this.form.value.inviteCode],id:userId}
            console.log(this.form.value.inviteCode)
            this.updateChildParentList(this.updateChild_ParentList_Request)
            this.router.navigate(["child-all-info"])
        } else {
            this.form.markAllAsTouched();
        }
    }

    updateChildParentList(updateChild_ParentList_Request:UpdateChild_ParentList_Request){
        this.childService.updateParentList(updateChild_ParentList_Request).subscribe({
            next:value => {
                console.log("updated parentList")
            },error:err => {
                console.log(err)
            }
        })
    }

}
