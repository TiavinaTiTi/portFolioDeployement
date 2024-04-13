import { TestBed } from '@angular/core/testing';

import { SkillsService } from './skills.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {SkillModel} from "../../../core/models/skill.model";
import {environment} from "../../../../environments/environment.development";
import {SkillResponseModel} from "../../../core/models/skill-response.model";


describe('SkillsService', () => {
  let service: SkillsService;
  // Déclaration de la variable pour le simulateur de requêtes HTTP
  let httpMock: HttpTestingController;

  // Donnee de test
  const mockSkills:SkillModel[] = [
    {
      idSkills: 2,
      title: 'Test Unite',
      skill: 'js',
      git: 'https',
      dateIn: new Date(),
      description: 'description test'
    }
  ]



  beforeEach(() => {
    TestBed.configureTestingModule({
      // Importation du module de test pour HttpClient
      imports: [HttpClientTestingModule],
     // Déclaration du service à tester
      providers: [SkillsService]
    });
    service = TestBed.inject(SkillsService);
    // Injection du simulateur de requêtes HTTP dans les tests
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Vérifie que toutes les requêtes HTTP ont été traitées
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchAllSkills() should be fetchAll Skill from API', ()=>{
    // Définition des données de test
    // const mockSkills:SkillModel[] = [{idSkills: 2, title: 'Test Unite', skill: 'js', git: 'https', dateIn: new Date(), description: 'description test'}]
    // Appel de la méthode fetchAllSkills du service
    service.fetchAllSkills().subscribe((skills:SkillModel[])=>{
      // Vérifie que les compétences retournées sont égales aux données de test
      expect(skills).toEqual(mockSkills);
    });

    // Capture de la requête HTTP attendue
    const req = httpMock.expectOne(`${environment.apiSkillsUrl}`);

    // Vérifie que la méthode HTTP utilisée est GET
    expect(req.request.method).toBe('GET');

    // Répond à la requête HTTP avec les données de test
    req.flush(mockSkills);
  })

  /*it('searchSkill(search: string) should be fetch to Skill param search', ()=>{
    // const mockSkills:SkillModel[] = [{idSkills: 2, title: 'Test Unite', skill: 'js', git: 'https', dateIn: new Date(), description: 'description test'}]
    const search: string = 'test';

    service.searchSkill(search).subscribe(
      (skills: SkillModel[])=>{
        expect(skills).toEqual(mockSkills)
      }
    )

    // Capture de la requête HTTP attendue
    const req = httpMock.expectOne(`${environment.apiSkillsUrl}/search?search=${search}`);

    // Vérifie que la méthode HTTP utilisée est GET
    expect(req.request.method).toBe('GET');

    // Répond à la requête HTTP avec les données de test
    req.flush(mockSkills);
  })
*/
  it('getAllSkillsPage(search: string ,size: number, page: number) should be fetchAll to Skills', ()=>{
    const dataSet: SkillResponseModel = {
      "content": mockSkills,
      "pageable": {
        "pageNumber": 0,
        "pageSize": 3,
        "sort": {
          "empty": true,
          "sorted": false,
          "unsorted": true
        },
        "offset": 0,
        "paged": true,
        "unpaged": false
      },
      "last": true,
      "totalElements": 0,
      "totalPages": 0,
      "size": 3,
      "number": 0,
      "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
      },
      "numberOfElements": 0,
      "first": true,
      "empty": true
    }
    const search: string = 'js';
    const size: number = 3;
    const page: number = 0;

    service.getAllSkillsPage(search, size, page).subscribe((value: SkillResponseModel)=>{
      expect(value).toEqual(dataSet);
    })

    // Capture de la requête HTTP attendue
    const req = httpMock.expectOne(`${environment.apiSkillsUrl}/search?search=${search}&size=${size}&page=${page}`);


    // Vérifie que la méthode HTTP utilisée est GET
    expect(req.request.method).toBe('GET');

    expect(req.request.params.get('search')).toBe(search);
    expect(req.request.params.get('size')).toBe(size.toString());
    expect(req.request.params.get('page')).toBe(page.toString());

    // Répond à la requête HTTP avec les données de test
    req.flush(dataSet);

  })

  it('postSkill(skill: SkillModel) should add skill', ()=>{
    service.postSkill(mockSkills[0]).subscribe((value)=>{
      expect(value).toEqual(mockSkills[0])
    })
    const req = httpMock.expectOne(environment.apiSkillsUrl)
    expect(req.request.method).toBe('POST')
    req.flush(mockSkills[0])
  })



});
