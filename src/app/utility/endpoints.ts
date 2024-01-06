import {HttpHeaders} from "@angular/common/http";

const source: string = "http://localhost:8080";

export const tokenHeader = (jwtToken:string): HttpHeaders =>{
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem(jwtToken)}`
    })
}
export const Endpoints: any ={
  BASE_URL: "http://localhost:4200",
  LOGIN_IN_FORM: source + "/auth" ,//Post
  UPDATE_CHILD_INFO: source + "/child/update", //PUT
  FIND_CHILD_BY_PARENTS_ID: source + "/child/findByParentList_IdIn", //GET
  CREATE_CHILD: source + "/child/create", //GET
  CREATE_PARENT: source + "/parent/create", //GET
  UPDATE_PARENT_LIST: source + "/child/child/updateParentList", //GET
  FIND_ALL_CHILD: source + "/child/child/findAll", //GET
  FIND_ALL_CHILD_BY_ID: source + "/child/child/findById/", //GET
  FIND_SUBSCRIBE_BY_USER_ID: source + "/subscribe/findByUserId/",//GET
  FIND_ALL_SUBSCRIBE_TYPE: source + "/subscribeType/findAll",//GET
  CREATE_SUBSCRIBE_TYPE: source + "/subscribeType/admin/create",//GET
  CREATE_SUBSCRIBE: source + "/subscribe/parent/create" //GET
}
