import { Injectable } from '@angular/core';
import {FindChildByParentsRequest} from "../model/find-child-by-parents-request";
import {Observable} from "rxjs";
import {ChildResponse} from "../model/child-response";
import {Endpoints} from "../utility/endpoints";
import {HttpService} from "./http.service";
import {SubscribeResponse} from "../model/subscribe-response";
import {CreateSubscribeRequest} from "../model/create-subscribe-request";
import {tokenHeader} from "../utility/endpoints";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  jwtHeader=tokenHeader("jwtToken")

  constructor(private http: HttpService) { }

  public createSubscribe(request: CreateSubscribeRequest ): Observable<any> {
    return this.http.POST<any>(Endpoints.CREATE_SUBSCRIBE, request,this.jwtHeader);
  }
  public findByUserId(userId:string): Observable<SubscribeResponse> {
    return this.http.GET<SubscribeResponse>(Endpoints.FIND_SUBSCRIBE_BY_USER_ID + userId);
  }
}
