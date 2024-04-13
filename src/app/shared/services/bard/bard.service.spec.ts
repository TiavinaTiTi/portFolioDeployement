import { TestBed } from '@angular/core/testing';

import { BardService } from './bard.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Content} from "../../../core/models/bard.model";
import {environment} from "../../../../environments/environment.development";

describe('BardService', () => {
  // Declaration du service
  let service: BardService;
  // Declaration de var pour le simulateur HTTP
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Importation du module de test pour HttpClient
      imports: [HttpClientTestingModule],
      // Declaration du service a tester
      providers: [BardService]
    });
    // Injection du service dans les tests
    service = TestBed.inject(BardService);
    // Injection du simulateur de requêtes HTTP dans les tests
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    // Verifie que toute le REQ HTTP ont été traitées
    httpMock.verify();
  })

  it('should be created', () => {
    // Vérifie que le service a été créé avec succès
    expect(service).toBeTruthy();
  });

  it('should POST promt to API', ()=>{
    // Donnee a envoyer
    const mockMsg: Content = {
      contents: [
        {
          role: 'user',
          parts: [{
            text: 'Bonjour'
          }]
        }
      ]
    }
    // Methode post dans service
    service.postMsg(mockMsg).subscribe(
      (response: any)=>{
        expect(response).toEqual(mockMsg);
      }
    );
    const req = httpMock.expectOne(`${environment.apiSkillsUrl} ${environment.keyAPI}`);
    expect(req.request.method).toBe('POST');
    req.flush(mockMsg);

  })

});
