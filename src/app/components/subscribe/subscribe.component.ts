import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {SubscribeResponse} from "../../model/subscribe-response";
import {SubscribeService} from "../../services/subscribe.service";
import {CreateSubscribeRequest} from "../../model/create-subscribe-request";
import {SubscribeTypeService} from "../../services/subscribe-type.service";
import {SubscribeTypeResponse} from "../../model/subscribe-type-response";

@Component({
    selector: 'app-subscribe',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgIf
    ],
    templateUrl: './subscribe.component.html',
    styleUrl: './subscribe.component.css'
})
export class SubscribeComponent implements OnInit {

    subscribeResponse: SubscribeResponse;
    subscribeTypeResponse:SubscribeTypeResponse[]
    userIsSubscribe: boolean
    createSubscribeRequest:CreateSubscribeRequest

    constructor(private subscribeService: SubscribeService,
                private subscribeTypeService:SubscribeTypeService,
                private router:Router) {
    }

    ngOnInit(): void {
        try {
            this.findSubscribeByUserId()
        }
        catch (e){
            this.userIsSubscribe=false
        }

        if (!this.userIsSubscribe){
            this.findAllSubscribeType()
        }else{

        }
    }

    findSubscribeByUserId() {
        const userId: string = localStorage.getItem("userId");
        this.subscribeService.findByUserId(userId).subscribe({
            next: value => {
                this.subscribeResponse = value
                this.userIsSubscribe=true
                console.log("usera ait subscribe bulundu")
            }, error: err => {

                console.log(err)
            }
        })
    }


    createSubscribe(id:string) {
        const parentId:string = localStorage.getItem("userId")
        this.createSubscribeRequest = {subscribeTypeId: id,parentId:parentId}
        this.subscribeService.createSubscribe(this.createSubscribeRequest).subscribe({
            next:value => {
                console.log("created subscribe")
                this.findSubscribeByUserId()
            },error:err => {

                console.log(err)
            }
        })
    }

    private findAllSubscribeType(){
        this.subscribeTypeService.findAllSubscribeType().subscribe({
            next:value => {
                this.subscribeTypeResponse = value
                console.log("tum typelar getirildi")
            },error:err => {
                console.log("ldsaflsdlfsdf")
                console.log(err)
            }
        })
    }
}
