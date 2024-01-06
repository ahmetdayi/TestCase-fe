import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {SubscribeResponse} from "../../model/subscribe-response";
import {SubscribeTypeResponse} from "../../model/subscribe-type-response";
import {CreateSubscribeRequest} from "../../model/create-subscribe-request";
import {SubscribeService} from "../../services/subscribe.service";
import {SubscribeTypeService} from "../../services/subscribe-type.service";

@Component({
    selector: 'app-subscribe-type-all',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        RouterLink
    ],
    templateUrl: './subscribe-type-all.component.html',
    styleUrl: './subscribe-type-all.component.css'
})
export class SubscribeTypeAllComponent implements OnInit {
    subscribeTypeResponse: SubscribeTypeResponse[]

    constructor(
        private subscribeTypeService: SubscribeTypeService,
    ) {
    }

    ngOnInit(): void {
        this.findAllSubscribeType()
    }

    private findAllSubscribeType() {
        this.subscribeTypeService.findAllSubscribeType().subscribe({
            next: value => {
                this.subscribeTypeResponse = value
                console.log("tum typelar getirildi")
            }, error: err => {
                console.log("ldsaflsdlfsdf")
                console.log(err)
            }
        })
    }
}
