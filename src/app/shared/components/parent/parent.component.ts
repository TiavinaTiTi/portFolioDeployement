import { Component } from '@angular/core';
import {EnfantComponent} from "../enfant/enfant.component";
import {NgForOf, NgIf} from "@angular/common";
import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    EnfantComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  animations: [
    trigger('todoAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({transform: 'translateY(-20px)'}),
            animate(200)
          ]),
          query('p', [
            style({transform: 'translateY(-20px)'}),
            animate(200)
          ]),
          query('@todoItem',
            stagger(100, animateChild()))
        ])
      ])
    ]),
    trigger('todoItem', [
      transition(':enter', [
        animate('0.5s ease-in', keyframes([
          style({
            height: 0,
            opacity: 0,
            transfom: 'translateX(-100%)'
          }),
          style({
            height: '50px'
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        ]))
      ])
    ])
  ]
})
export class ParentComponent {
  valeurDuParent = "Hello depuis le parent!";


  todos = [
    {item: 'Text 1'},
    {item: 'Text 2'},
    {item: 'Text 3'},
    {item: 'Text 4'},
    {item: 'Text 5'}
  ]

  change($event: MouseEvent) {
    this.valeurDuParent = "Hello word"
  }


  messageDuEnfant!: string;

  recevoirEvent(message: string) {
    this.messageDuEnfant = message;
  }
}
