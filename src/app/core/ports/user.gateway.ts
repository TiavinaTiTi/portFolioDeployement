import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

export interface UserGateway{
  getUser(): Observable<UserModel>;
  isAuthenticate(): Observable<UserModel>;
}
