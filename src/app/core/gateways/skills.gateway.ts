import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, switchMap} from "rxjs";
import {Skill} from "../models/skill";
import {environment} from "../../../environments/environment.development";
import {SkillResponse} from "../models/skill-response";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HandleError} from "../../shared/error/handleError";

@Injectable({
  providedIn: "root"
})
export class SkillsGateway{

  constructor(public http: HttpClient) {
  }

  fetchSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${environment.apiSkillsUrl}`).pipe(
      catchError(new HandleError().handleError)
    );
  }

  fetchSkillOrTitle(search: string): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${environment.apiSkillsUrl}/search?search=${search}`).pipe(
      catchError(new HandleError().handleError)
    )
  }

  /**
   * Save Skill
   * @param skill
   */
  postSkill(skill: Skill):Observable<Skill>{
    return this.http.post<Skill>(environment.apiSkillsUrl, skill)
  }


  /**
   * Fetch Data Skill and pagination
   */
  getAllSkillsPage(search: string ,size: number, page: number): Observable<SkillResponse>{
    let params = new HttpParams()
      .append('search', search.toString())
      .append('size', size.toString())
      .append('page', page.toString())
    return this.http.get<SkillResponse>(`${environment.apiSkillsUrl}/search`, {params}).pipe(
      catchError(new HandleError().handleError)
    )

  }

  deleteSkill(id: number){
    let params = new HttpParams()
      .append('id', id)
    return this.http.delete(`${environment.apiSkillsUrl}/delete`, {params})
  }

  updateSkill(skill: Skill, id: number){
    let params = new HttpParams()
      .append('id', id)
    return this.http.put<SkillResponse>(`${environment.apiSkillsUrl}/update`, skill, {params})
  }


}
