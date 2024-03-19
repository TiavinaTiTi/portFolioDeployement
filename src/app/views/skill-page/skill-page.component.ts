import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, JsonPipe, NgClass, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SkillsGateway} from "../../core/gateways/skills.gateway";
import {SkillResponse} from "../../core/models/skill-response";
import {Skill} from "../../core/models/skill";
import {Observable} from "rxjs";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-skill-page',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    JsonPipe,
    NgIf,
    NgClass,
    RouterLink,
    DatePipe
  ],
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.scss',
  animations: [
    /*trigger('todo', [
      transition('* => *', [
        group([
          query('.col', [
            useAnimation(animation([
              style({opacity: 0}),
              animate(
                '.6s ease-out',
                keyframes([
                  style({opacity: .2, offset: 0.3}),
                  style({opacity: .6, offset: 0.6}),
                  style({opacity: .8, offset: 1})
                ])
              )
            ]))
          ]),
          query('@translateLeftToRight',
            stagger(200, animateChild()),{optional: true}
          )
        ])
      ])
    ]),*/

  ]
})


export class SkillPageComponent implements OnInit{

  /**
   * String to Array
   * @protected
   */
  protected readonly Array = Array;

  formSkills!: FormGroup;
  listSkills$!: Observable<SkillResponse>;
  listSkills!: SkillResponse;
  msgError!: string;

  defaultPage: number = 0;
  defaultSize: number = 3;

  notification!: string;

  /**
   * Format validator URL GitHub
   */
  urlRegex!: RegExp;

  formSearch = this.fb.nonNullable.group({
    name: ['']
  })

  // show: boolean = true
  constructor(
    private fb: FormBuilder,
    private skillGateway: SkillsGateway,
    private route: Router
  ) {
  }

  ngOnInit() {
    // this.urlRegex = this._formatPatternURL()
    this.initFromSkills()
    let search = this.formSearch.controls.name.value
    this.getAllSkillsPage(search ,this.defaultSize, this.defaultPage)
  }



  initFromSkills(){
    this.formSkills = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      skill: ['', Validators.required],
      git: ['', Validators.required],
      dateIn: [new Date()],
      description: ['', Validators.required]
    })
  }


  /**
   * Get avec fetchAll in page and size
   */
  getAllSkillsPage(search:string, size:number, page: number){
    /*this.skillGateway.getAllSkillsPage(search, size, page).subscribe({
      next: value => {
        this.listSkills$ = value
      }
    })*/
    this.listSkills$ = this.skillGateway.getAllSkillsPage(search, size, page)

    this.listSkills$.subscribe({
      next: value => this.listSkills = value
    })
  }

  /**
   * GET Format URL Validator
   */
  private _formatPatternURL(): RegExp{
    return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
  }


  skillsFilter(){
    let search = this.formSearch.controls.name.value
    this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
    this.goToPage(0)
  }

  inputSearch(){
    setTimeout(()=>{
      let search = this.formSearch.controls.name.value
      this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
      this.goToPage(0)
    }, 300)
  }

  onSubmit(){
    if(this.formSkills.valid){
      if(this.formSkills.value.id === 0){
        this.skillGateway.postSkill(this.formSkills.value).subscribe({
          next: ()=>{
            let search = this.formSearch.controls.name.value
            this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
            this.formSkills.reset()
          },
          error: err => this.msgError = err
        })
      }else {
        this.skillGateway.updateSkill(this.formSkills.value, this.formSkills.value.id).subscribe({
          next: () => {
            let search = this.formSearch.controls.name.value
            this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
            this.formSkills.reset()
          }
        })
      }
    }else {
      this.msgError = 'Completer les champs'
    }
  }

  goToPage(i: number){
    this.defaultPage = i
    this.ngOnInit()
  }

  deleteSkill(id: number){
    this.skillGateway.deleteSkill(id).subscribe({
      next: ()=>{
        let search = this.formSearch.controls.name.value
        this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
      }
    })
  }

  updateFormsSkill(skill: Skill){
    this.formSkills = this.fb.group({
      id: [skill.idSkills],
      title: [skill.title, Validators.required],
      skill: [skill.skill, Validators.required],
      git: [skill.git, Validators.required],
      dateIn: [new Date()],
      description: [skill.description, Validators.required]
    })
  }


  /*private formatDate(date: Date | null): string {
    if (date) {
      return this.datePipe.transform(date, 'yyyy/MM/dd') || '';
    }
    return '';
  }*/

}
