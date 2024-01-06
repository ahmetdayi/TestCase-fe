export interface LoginResponse{
  userId: string,

  jwtToken: string,
  role: Role
}
enum Role{
  ADMIN,PARENT,CHILD
}
