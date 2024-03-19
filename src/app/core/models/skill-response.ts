import {Skill} from "./skill";

export interface SkillResponse {
  content: Skill[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  empty: boolean;
}
