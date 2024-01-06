import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SubscribeResponse} from "../model/subscribe-response";
import {Endpoints, tokenHeader} from "../utility/endpoints";
import {HttpService} from "./http.service";
import {SubscribeTypeResponse} from "../model/subscribe-type-response";
import {CreateSubscribeTypeComponent} from "../components/create-subscribe-type/create-subscribe-type.component";
import {CreateSubscribeTypeRequest} from "../model/create-subscribe-type-request";

@Injectable({
  providedIn: 'root'
})
export class SubscribeTypeService {
  jwtToken = tokenHeader("jwtToken")

  constructor(private http: HttpService) { }
  public findAllSubscribeType(): Observable<SubscribeTypeResponse[]> {
    return this.http.GET<SubscribeTypeResponse[]>(Endpoints.FIND_ALL_SUBSCRIBE_TYPE);
  }
  public createSubscribeType(request: CreateSubscribeTypeRequest): Observable<any> {
    return this.http.POST<any>(Endpoints.CREATE_SUBSCRIBE_TYPE,request,this.jwtToken);
  }

}
