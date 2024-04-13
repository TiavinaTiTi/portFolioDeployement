import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {SkillModel} from "../../../core/models/skill.model";
import {environment} from "../../../../environments/environment.development";
import {SkillResponseModel} from "../../../core/models/skill-response.model";
import {HandleError} from "../../error/handleError";

@Injectable({
  providedIn: "root"
})
export class SkillsService {

  private http:HttpClient = inject(HttpClient)

  fetchSkillId(id: number): Observable<SkillModel>{
    return this.http.get<SkillModel>(`${environment.apiSkillsUrl}/skill/id=${id}`).pipe(
      catchError(new HandleError().handleError)
    )
  }

  fetchAllSkills(): Observable<SkillModel[]>{
    return this.http.get<SkillModel[]>(`${environment.apiSkillsUrl}`).pipe(
      catchError(new HandleError().handleError)
    );
  }

  /**
   * Save SkillModel
   * @param skill
   */
  postSkill(skill: SkillModel):Observable<SkillModel>{
    return this.http.post<SkillModel>(environment.apiSkillsUrl, skill)
  }


  /**
   * Fetch Data SkillModel and pagination
   */
  getAllSkillsPage(search: string ,size: number, page: number): Observable<SkillResponseModel>{
    let params = new HttpParams()
      .append('search', search.toString())
      .append('size', size.toString())
      .append('page', page.toString())
    /*return this.http.get<SkillResponseModel>(`${environment.apiSkillsUrl}/search`, {params}).pipe(
      catchError(new HandleError().handleError)
    )*/
    return this.http.get<SkillResponseModel>(`${environment.apiSkillsUrl}/search`, {params}).pipe(
      catchError(new HandleError().handleError)
    )
  }

  deleteSkill(id: number){
    let params = new HttpParams()
      .append('id', id)
    return this.http.delete(`${environment.apiSkillsUrl}/delete`, {params})
  }

  updateSkill(skill: SkillModel, id: number){
    let params = new HttpParams()
      .append('id', id)
    return this.http.put<SkillResponseModel>(`${environment.apiSkillsUrl}/update`, skill, {params})
  }


}
