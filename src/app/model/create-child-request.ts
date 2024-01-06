export interface CreateChildRequest {
    email: string,
    password: string,
    confirmPassword: string,
    name: string,
    surname: string,
    inviteCodeList: string[]
}
