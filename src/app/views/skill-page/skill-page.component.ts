import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, JsonPipe, NgClass, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SkillsService} from "../../shared/services/skills/skills.service";
import {SkillResponseModel} from "../../core/models/skill-response.model";
import {SkillModel} from "../../core/models/skill.model";
import {Observable, toArray} from "rxjs";
import {RouterLink} from "@angular/router";
import {UserService} from "../../shared/services/user/user-service";
import {ThemeService} from "../../shared/services/theme/theme.service";
import {SkillDetailComponent} from "../skill-detail/skill-detail.component";
import {ListSkillsComponent} from "../list-skills/list-skills.component";

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
    DatePipe,
    SkillDetailComponent,
    ListSkillsComponent
  ],
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.scss',
  animations: []
})


export class SkillPageComponent implements OnInit{

  /**
   * String to Array
   * @protected
   */
  protected readonly Array = Array;

  formSkills!: FormGroup;
  listSkills$!: Observable<SkillResponseModel>;
  // listSkills!: SkillResponseModel;
  skillDetail!: SkillModel;
  msgError!: string;

  defaultPage: number = 0;
  defaultSize: number = 3;

  notification!: string;

  theme: string = 'light';

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
    private skillsService: SkillsService,
    public authService: UserService,
    private themeService: ThemeService
  ) {
  }

  ngOnInit() {
    this.themeService.currentTheme.subscribe((value)=>{
      this.theme = value
    })

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
    this.listSkills$ = this.skillsService.getAllSkillsPage(search, size, page)
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
      if(this.formSkills.value.id === 0 || this.formSkills.value.id === null){
        this.skillsService.postSkill(this.formSkills.value).subscribe({
          next: ()=>{
            let search = this.formSearch.controls.name.value
            this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
            this.formSkills.reset()
          },
          error: err => this.msgError = err
        })
      }else {
        this.skillsService.updateSkill(this.formSkills.value, this.formSkills.value.id).subscribe({
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
    let search = this.formSearch.controls.name.value
    this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
  }

  deleteSkill(id: number){
    this.skillsService.deleteSkill(id).subscribe({
      next: ()=>{
        let search = this.formSearch.controls.name.value
        this.getAllSkillsPage(search, this.defaultSize, this.defaultPage)
      }
    })
  }

  updateFormsSkill(skill: SkillModel){
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

  showDetail(id: number)
  {
    this.skillsService.fetchSkillId(id).subscribe((value)=>{
      this.skillDetail = value;
      console.log("Skill Detail: " + JSON.stringify(value))
    })
  }
  
}
