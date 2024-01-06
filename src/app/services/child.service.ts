import { Injectable } from '@angular/core';
import {LoginRequest} from "../model/loginRequest";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/loginResponse";
import {Endpoints, tokenHeader} from "../utility/endpoints";
import {HttpService} from "./http.service";
import {UpdateChildRequest} from "../model/update-child-request";
import {FindChildByParentsRequest} from "../model/find-child-by-parents-request";
import {ChildResponse} from "../model/child-response";
import {UpdateChild_ParentList_Request} from "../model/UpdateChild_ParentList_Request";
import {FindAllChildResponse} from "../model/find-all-child-response";
import {CreateChildRequest} from "../model/create-child-request";

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  jwtToken = tokenHeader("jwtToken")

  constructor(private http: HttpService) { }

  public updateChildInfo(request: UpdateChildRequest): Observable<any> {
    return this.http.PUT<any>(Endpoints.UPDATE_CHILD_INFO, request);
  }
  public findChildByParentIdList_In(request: Partial<FindChildByParentsRequest>): Observable<ChildResponse[]> {
    return this.http.POST<ChildResponse[]>(Endpoints.FIND_CHILD_BY_PARENTS_ID, request);
  }
  public updateParentList(request: UpdateChild_ParentList_Request): Observable<any> {
    return this.http.PUT<any>(Endpoints.UPDATE_PARENT_LIST, request,this.jwtToken);
  }
  public findAllChildInfo(childId:string): Observable<FindAllChildResponse> {
    return this.http.GET<FindAllChildResponse>(Endpoints.FIND_ALL_CHILD_BY_ID + childId,this.jwtToken);
  }
  public createChild(request: Partial<CreateChildRequest>): Observable<any> {
    return this.http.POST<any>(Endpoints.CREATE_CHILD, request);
  }
}
