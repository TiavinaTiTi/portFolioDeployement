import {Observable} from "rxjs";

export interface BardGateway {
  postMsg(msg: any): Observable<any>;
}
