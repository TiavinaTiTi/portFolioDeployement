import { Injectable } from '@angular/core';
import {UserModel} from "../../../core/models/user.model";
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserModel[] = [];
  authenticatedUser: UserModel | undefined;

  constructor(private http: HttpClient) {
    this.users.push({id: 1, userName: 'admin', email: 'admin@gmail.com', password: 'admin', role: ['ADMIN']})
    this.users.push({id: 2, userName: 'user', email: 'user@gmail.com', password: 'user', role: ['ADMIN']})
  }

  public login(address: string, pwd: string): Observable<UserModel>{
    let appUser = this.users.find(u => u.email == address);
    if(!appUser) return throwError(()=> new Error("User not Found"));
    if(appUser.password != pwd) return throwError(()=> new Error("Mot de passe incorrect"));

    return of(appUser)
  }


  public authenticateUser(appUser: UserModel): Observable<boolean>{
    this.authenticatedUser = appUser;
    localStorage.setItem('authUser', JSON.stringify({userName: appUser.userName, email: appUser.email, role: appUser.role, jwt: "JWT_TOKKEN"}))
    return of(true)
  }

  public hasRole(role: string): boolean{
    return this.authenticatedUser!.role.includes(role);
  }

  public isAuthenticed(): boolean{
    return this.authenticatedUser != undefined;
  }

  public logOut(){
    this.authenticatedUser = undefined
    localStorage.removeItem("authUser")
  }


}
