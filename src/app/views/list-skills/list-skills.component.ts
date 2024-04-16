import {Component, inject, Input} from '@angular/core';
import {AsyncPipe, DatePipe, NgClass} from "@angular/common";
import {Observable} from "rxjs";
import {SkillResponseModel} from "../../core/models/skill-response.model";
import {UserService} from "../../shared/services/user/user-service";
import {SkillModel} from "../../core/models/skill.model";
import {FormBuilder, Validators} from "@angular/forms";
import {SkillsService} from "../../shared/services/skills/skills.service";

@Component({
  selector: 'app-list-skills',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    NgClass
  ],
  templateUrl: './list-skills.component.html',
  styleUrl: './list-skills.component.scss'
})
export class ListSkillsComponent {

    protected readonly Array = Array;

    @Input() listSkills$ !: Observable<SkillResponseModel>
    @Input() theme: string = 'light';

    authService: UserService = inject(UserService);
    fb: FormBuilder = inject(FormBuilder);
    skillsService: SkillsService = inject(SkillsService);


  goToPage(i: number){
    /*this.defaultPage = i
    this.ngOnInit()*/
  }

  deleteSkill(id: number){
    this.skillsService.deleteSkill(id).subscribe({})
  }

  updateFormsSkill(skill: SkillModel){
    /*this.formSkills = this.fb.group({
      id: [skill.idSkills],
      title: [skill.title, Validators.required],
      skill: [skill.skill, Validators.required],
      git: [skill.git, Validators.required],
      dateIn: [new Date()],
      description: [skill.description, Validators.required]
    })*/
  }

}
