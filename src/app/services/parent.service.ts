import { Injectable } from '@angular/core';
import {CreateChildRequest} from "../model/create-child-request";
import {Observable} from "rxjs";
import {Endpoints} from "../utility/endpoints";
import {HttpService} from "./http.service";
import {CreateParentRequest} from "../model/create-parent-request";

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpService) { }

  public createParent(request: Partial<CreateParentRequest>): Observable<any> {
    return this.http.POST<any>(Endpoints.CREATE_PARENT, request);
  }
}
