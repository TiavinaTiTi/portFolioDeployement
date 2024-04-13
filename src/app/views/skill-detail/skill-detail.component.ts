import {Component, Input} from '@angular/core';
import {SkillModel} from "../../core/models/skill.model";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './skill-detail.component.html',
  styleUrl: './skill-detail.component.scss'
})
export class SkillDetailComponent {

  @Input() detailSkill!: SkillModel;
  @Input() theme: string = 'light';

}
