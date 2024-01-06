import {GetParentResponse} from "./get-parent-response";

export interface FindAllChildResponse{
    id:string,
    email:string,
    name:string,
    surname:string,
    parentList:GetParentResponse[]
}
