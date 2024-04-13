import {inject, Injectable} from '@angular/core';
import {BardGateway} from "../../../core/ports/bard.gateway";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {Content} from "../../../core/models/bard.model";

@Injectable({
  providedIn: 'root'
})
export class BardService implements BardGateway{

  http = inject(HttpClient);

  public postMsg(msg: Content):Observable<any>{
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }
    return this.http.post(`${environment.apiBardurl} ${environment.keyAPI}`, msg, options).pipe()
  }

}
