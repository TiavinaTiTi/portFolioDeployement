import {Observable} from "rxjs";
import {SkillModel} from "../models/skill.model";
import {SkillResponseModel} from "../models/skill-response.model";

export interface SkillGateway {
  fetchAllSkills(): Observable<SkillModel[]>;
  searchSkill(): Observable<SkillModel[]>;
  postSkill(): Observable<SkillModel>;
  getAllSkillsPage(): Observable<SkillResponseModel>;
  deleteSkill(): Observable<Object>;
  updateSkill(): Observable<SkillResponseModel>;
}
