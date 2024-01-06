import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FindAllChildResponse} from "../../model/find-all-child-response";
import {ChildService} from "../../services/child.service";

@Component({
    selector: 'app-child-all-info',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink
    ],
    templateUrl: './child-all-info.component.html',
    styleUrl: './child-all-info.component.css'
})
export class ChildAllInfoComponent implements OnInit{
    findAllChildResponse: FindAllChildResponse

    constructor(private childService:ChildService) {
    }
    ngOnInit(): void {
        this.findAllChild()
    }

    findAllChild(){
        const childId:string = localStorage.getItem("userId")
        this.childService.findAllChildInfo(childId).subscribe({
            next:value => {
                this.findAllChildResponse = value
                console.log("veriler getirildi")
            },error:err => {
                console.log(err)}
        })
    }


}
