import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ChildResponse} from "../../model/child-response";
import {ChildService} from "../../services/child.service";
import {FindChildByParentsRequest} from "../../model/find-child-by-parents-request";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-child-info',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './child-info.component.html',
  styleUrl: './child-info.component.css'
})
export class ChildInfoComponent implements OnInit{
  childResponse:ChildResponse[];
  findChildByParentsIdRequest:FindChildByParentsRequest

  constructor(private childService:ChildService) {
  }
  ngOnInit(): void {
    const userId:string = localStorage.getItem("userId")
    this.findChildByParentsIdRequest = {parentIdList:[userId]}
    this.childService.findChildByParentIdList_In(this.findChildByParentsIdRequest).subscribe({
      next: value => {
        this.childResponse = value;
        console.log(this.childResponse)
      },
      error:err => {
        console.log(err);
      }
    })
  }
  getChildParents(){

  }



}
