import {Component, OnInit} from '@angular/core';
import {ChildService} from "../../services/child.service";
import {FindChildByParentsRequest} from "../../model/find-child-by-parents-request";
import {ChildResponse} from "../../model/child-response";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-show-children-for-parent',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './show-children-for-parent.component.html',
  styleUrl: './show-children-for-parent.component.css'
})
export class ShowChildrenForParentComponent implements OnInit{

  findChildRequest:FindChildByParentsRequest
  childResponse:ChildResponse[]
  constructor(private childService:ChildService) {
  }
  ngOnInit(): void {
    this.findChildrenForParent()
  }

  findChildrenForParent(){
    const userId:string = localStorage.getItem("userId");
    this.findChildRequest = {parentIdList:[userId]}
    this.childService.findChildByParentIdList_In(this.findChildRequest).subscribe({
      next:value => {
        this.childResponse = value
        console.log("show all children")
      },error:err => {
        console.log(err)
      }
    })
  }


}
